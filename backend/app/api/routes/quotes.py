from fastapi import APIRouter, Depends

from app.core.i18n import get_locale, translate
from app.schemas.quote import QuoteRequest, QuoteResponse
from app.services.quote_service import estimate_quote

router = APIRouter(prefix="/quotes", tags=["quotes"])


@router.post("/estimate", response_model=QuoteResponse)
def create_estimate(request: QuoteRequest, locale: str = Depends(get_locale)) -> QuoteResponse:
    estimate = estimate_quote(request)
    return QuoteResponse(estimate=estimate, disclaimer=translate(locale, "quote.disclaimer"))
