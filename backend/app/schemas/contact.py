import uuid

from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=30)
    message: str = Field(min_length=1, max_length=2000)
    preferred_language: str | None = Field(default=None, max_length=5)


class ContactResponse(BaseModel):
    id: uuid.UUID
    message: str
