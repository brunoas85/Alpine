from app.schemas.quote import Frequency, QuoteRequest, ServiceType

_SERVICE_RATES: dict[ServiceType, tuple[float, float]] = {
    # service_type: (rate_per_sq_ft, minimum_price)
    ServiceType.MOWING: (0.03, 40.0),
    ServiceType.PRUNING: (0.05, 60.0),
    ServiceType.BEDS: (0.08, 90.0),
    ServiceType.WINTER: (0.04, 55.0),
}

_FREQUENCY_DISCOUNTS: dict[Frequency, float] = {
    Frequency.ONE_TIME: 0.0,
    Frequency.WEEKLY: 0.15,
    Frequency.BIWEEKLY: 0.08,
}


def estimate_quote(request: QuoteRequest) -> float:
    rate_per_sq_ft, minimum = _SERVICE_RATES[request.service_type]
    discount = _FREQUENCY_DISCOUNTS[request.frequency]

    raw_price = request.size_sq_ft * rate_per_sq_ft * (1 - discount)
    return round(max(raw_price, minimum), 2)
