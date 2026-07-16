from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    database_url: str = "postgresql+psycopg://alpine:alpine@localhost:5432/alpine"
    default_locale: str = "en"
    supported_locales: tuple[str, ...] = ("en", "es")


settings = Settings()
