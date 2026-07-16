from sqlalchemy.orm import Session

from app.models.contact import Contact


class ContactRepository:
    def __init__(self, db: Session):
        self._db = db

    def create(self, *, name: str, email: str, phone: str | None, message: str, preferred_language: str) -> Contact:
        contact = Contact(
            name=name,
            email=email,
            phone=phone,
            message=message,
            preferred_language=preferred_language,
        )
        self._db.add(contact)
        self._db.commit()
        self._db.refresh(contact)
        return contact
