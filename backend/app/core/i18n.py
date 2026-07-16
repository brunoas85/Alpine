import json
from functools import lru_cache
from pathlib import Path

from fastapi import Header

from app.core.config import settings

LOCALES_DIR = Path(__file__).resolve().parent.parent / "locales"


@lru_cache
def _load_locale(locale: str) -> dict:
    path = LOCALES_DIR / f"{locale}.json"
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def parse_accept_language(accept_language: str | None) -> str:
    """Pick the best supported locale from an Accept-Language header."""
    if not accept_language:
        return settings.default_locale

    for part in accept_language.split(","):
        tag = part.split(";")[0].strip().lower()
        primary = tag.split("-")[0]
        if primary in settings.supported_locales:
            return primary

    return settings.default_locale


def translate(locale: str, key: str) -> str:
    """Resolve a dotted key (e.g. 'errors.not_found') for the given locale."""
    data = _load_locale(locale if locale in settings.supported_locales else settings.default_locale)
    node = data
    for part in key.split("."):
        node = node.get(part, {}) if isinstance(node, dict) else {}
    return node if isinstance(node, str) else key


def get_locale(accept_language: str | None = Header(default=None)) -> str:
    return parse_accept_language(accept_language)
