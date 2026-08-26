import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

export default function ContactForm({ prefillMessage }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillMessage) {
      setForm((prev) => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <h2 className="font-display text-3xl font-normal text-ink sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-[38ch] font-sans text-[15.5px] leading-relaxed text-ink/72">
            {t("contact.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
              {t("contact.callUs")}
            </span>
            <a href={`tel:${PHONE_TEL}`} className="font-display text-2xl text-ink">
              {PHONE_DISPLAY}
            </a>
            <span className="font-sans text-[13px] text-ink/60">{t("contact.callHours")}</span>
          </div>

          {form.message && form.message === prefillMessage && (
            <p className="mt-6 bg-cream-muted px-4 py-3 font-sans text-sm text-ink">
              {t("contact.prefillNotice")}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block font-sans font-medium text-ink">
              {t("contact.nameLabel")}
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange("name")}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2.5 font-sans focus:border-ink focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-sans font-medium text-ink">
              {t("contact.emailLabel")}
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2.5 font-sans focus:border-ink focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-sans font-medium text-ink">
              {t("contact.phoneLabel")}
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2.5 font-sans focus:border-ink focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-sans font-medium text-ink">
              {t("contact.messageLabel")}
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange("message")}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2.5 font-sans focus:border-ink focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm bg-forest px-8 py-3.5 font-sans font-medium text-cream transition-colors hover:bg-ink"
          >
            {t("contact.submit")}
          </button>

          {submitted && (
            <p className="text-center font-sans text-sm text-forest">{t("contact.successMessage")}</p>
          )}
        </form>
      </div>
    </section>
  );
}
