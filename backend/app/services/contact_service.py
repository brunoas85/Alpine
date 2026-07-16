from sqlalchemy.orm import Session

from app.core.i18n import translate
from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactRequest, ContactResponse


def submit_contact(db: Session, request: ContactRequest, locale: str) -> ContactResponse:
    preferred_language = request.preferred_language or locale
    repository = ContactRepository(db)

    contact = repository.create(
        name=request.name,
        email=request.email,
        phone=request.phone,
        message=request.message,
        preferred_language=preferred_language,
    )

    return ContactResponse(id=contact.id, message=translate(preferred_language, "contact.received"))
