import pytest

from app.schemas.quote import Frequency, QuoteRequest, ServiceType
from app.services.quote_service import estimate_quote


def test_one_time_mowing_uses_flat_rate():
    request = QuoteRequest(size_sq_ft=2000, service_type=ServiceType.MOWING, frequency=Frequency.ONE_TIME)
    assert estimate_quote(request) == 60.0


def test_weekly_frequency_applies_discount():
    request = QuoteRequest(size_sq_ft=2000, service_type=ServiceType.MOWING, frequency=Frequency.WEEKLY)
    assert estimate_quote(request) == pytest.approx(51.0)


def test_small_garden_falls_back_to_minimum_price():
    request = QuoteRequest(size_sq_ft=100, service_type=ServiceType.BEDS, frequency=Frequency.ONE_TIME)
    assert estimate_quote(request) == 90.0
