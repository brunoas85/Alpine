from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.i18n import get_locale
from app.db.session import get_db
from app.schemas.contact import ContactRequest, ContactResponse
from app.services.contact_service import submit_contact

router = APIRouter(prefix="/contacts", tags=["contacts"])


@router.post("", response_model=ContactResponse, status_code=201)
def create_contact(
    request: ContactRequest,
    db: Session = Depends(get_db),
    locale: str = Depends(get_locale),
) -> ContactResponse:
    return submit_contact(db, request, locale)
