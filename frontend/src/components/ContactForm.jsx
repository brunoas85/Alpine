import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("contact.title")}
      </h2>
      <p className="mt-2 text-center text-earth/80">{t("contact.subtitle")}</p>

      {form.message && form.message === prefillMessage && (
        <p className="mt-4 rounded-lg bg-sand/40 px-4 py-3 text-center text-sm text-earth">
          {t("contact.prefillNotice")}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div>
          <label htmlFor="name" className="block font-medium text-earth">
            {t("contact.nameLabel")}
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-earth">
            {t("contact.emailLabel")}
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium text-earth">
            {t("contact.phoneLabel")}
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-earth">
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange("message")}
            className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-forest px-8 py-3 font-medium text-offwhite transition-colors hover:bg-forest-dark"
        >
          {t("contact.submit")}
        </button>

        {submitted && (
          <p className="text-center text-sm text-forest">
            {t("contact.successMessage")}
          </p>
        )}
      </form>
    </section>
  );
}
