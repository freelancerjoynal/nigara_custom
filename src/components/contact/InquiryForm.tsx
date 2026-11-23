"use client";

import type { FormEvent } from "react";
import SectionHeading from "@/components/global/SectionHeading";
import { siteConfig } from "@/data/site";
import { prepareInquiry, resetInquiry, setField, type InquiryFields } from "@/store/slices/inquirySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const fields: { name: keyof InquiryFields; label: string; type: string; required?: boolean }[] = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "business", label: "Business name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
];

export default function InquiryForm() {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.inquiry.fields);
  const prepared = useAppSelector((state) => state.inquiry.prepared);

  const whatsappMessage = [
    "Hello Niagara Custom Water, I would like to request a custom water bottle quote.",
    "",
    `Name: ${values.name}`,
    `Business: ${values.business}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    "",
    "Requirements:",
    values.message,
  ].join("\n");

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(prepareInquiry());
  };

  return (
    <section className="section inquiry-section">
      <div className="shell inquiry-layout">
        <SectionHeading
          eyebrow="Request a quote"
          title={
            <>
              Tell us what your <span className="text-ice">brand needs.</span>
            </>
          }
          description="We use your details to prepare a customized water bottle proposal. Your information stays in your browser until you choose to send it."
        />

        {prepared ? (
          <div className="glass-card inquiry-ready" role="status">
            <span className="inquiry-ready__mark" aria-hidden="true">
              ✓
            </span>
            <h3>Your inquiry is ready, {values.name.split(" ")[0]}.</h3>
            <p>
              Continue on WhatsApp to send your request directly to our team. You can also call us
              on {siteConfig.phone}.
            </p>
            <p className="inquiry-ready__summary">
              <strong>{values.business}</strong> — {values.email}
              {values.phone ? ` · ${values.phone}` : ""}
            </p>
            <div className="inquiry-ready__actions">
              <a className="btn btn--primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Continue on WhatsApp <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => dispatch(resetInquiry())}
              >
                Edit details
              </button>
            </div>
          </div>
        ) : (
          <form className="glass-card inquiry-form" onSubmit={onSubmit}>
            <div className="form-grid">
              {fields.map((field) => (
                <div className="field" key={field.name}>
                  <label htmlFor={`inquiry-${field.name}`}>{field.label}</label>
                  <input
                    id={`inquiry-${field.name}`}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(event) =>
                      dispatch(setField({ field: field.name, value: event.target.value }))
                    }
                    autoComplete={
                      field.name === "name"
                        ? "name"
                        : field.name === "email"
                          ? "email"
                          : field.name === "phone"
                            ? "tel"
                            : "organization"
                    }
                  />
                </div>
              ))}
            </div>

            <div className="field">
              <label htmlFor="inquiry-message">Your requirements</label>
              <textarea
                id="inquiry-message"
                name="message"
                rows={6}
                placeholder="Tell us about your business, preferred label design, estimated quantity and delivery timeline."
                value={values.message}
                onChange={(event) =>
                  dispatch(setField({ field: "message", value: event.target.value }))
                }
              />
            </div>

            <button type="submit" className="btn btn--primary inquiry-form__submit">
              Prepare my inquiry <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
