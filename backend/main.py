from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api.routes import contacts, quotes
from app.core.i18n import parse_accept_language, translate

app = FastAPI(title="Alpine Garden & Lawn Services API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError) -> JSONResponse:
    locale = parse_accept_language(request.headers.get("accept-language"))
    return JSONResponse(
        status_code=422,
        content={
            "message": translate(locale, "errors.validation_error"),
            "details": exc.errors(),
        },
    )


app.include_router(quotes.router, prefix="/api")
app.include_router(contacts.router, prefix="/api")


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
