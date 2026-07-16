from enum import StrEnum

from pydantic import BaseModel, Field


class ServiceType(StrEnum):
    MOWING = "mowing"
    PRUNING = "pruning"
    BEDS = "beds"
    WINTER = "winter"


class Frequency(StrEnum):
    ONE_TIME = "oneTime"
    WEEKLY = "weekly"
    BIWEEKLY = "biweekly"


class QuoteRequest(BaseModel):
    size_sq_ft: int = Field(gt=0, le=100_000)
    service_type: ServiceType
    frequency: Frequency = Frequency.ONE_TIME


class QuoteResponse(BaseModel):
    estimate: float
    currency: str = "USD"
    disclaimer: str
