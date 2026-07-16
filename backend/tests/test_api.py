def test_health_check(client):
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_quote_estimate_returns_localized_disclaimer_in_spanish(client):
    response = client.post(
        "/api/quotes/estimate",
        json={"size_sq_ft": 2000, "service_type": "mowing", "frequency": "oneTime"},
        headers={"Accept-Language": "es"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["estimate"] == 60.0
    assert "visita" in body["disclaimer"]


def test_quote_estimate_defaults_to_english(client):
    response = client.post(
        "/api/quotes/estimate",
        json={"size_sq_ft": 2000, "service_type": "mowing", "frequency": "oneTime"},
    )
    assert response.status_code == 200
    assert "on-site visit" in response.json()["disclaimer"]


def test_contact_validation_error_is_localized(client):
    response = client.post(
        "/api/contacts",
        json={"name": "Bruno", "email": "not-an-email", "message": "Hola"},
        headers={"Accept-Language": "es"},
    )
    assert response.status_code == 422
    assert response.json()["message"] == "Uno o más campos son inválidos."


def test_contact_submission_is_persisted(client):
    response = client.post(
        "/api/contacts",
        json={
            "name": "Bruno Salazar",
            "email": "bruno@example.com",
            "message": "Necesito una cotización para mi jardín.",
            "preferred_language": "es",
        },
    )
    assert response.status_code == 201
    body = response.json()
    assert body["message"] == "¡Gracias! Recibimos tu mensaje y te contactaremos pronto."
    assert "id" in body
