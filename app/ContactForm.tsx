"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      best_time: (form.elements.namedItem("best_time") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch {
      setSubmitting(false);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <form name="callbackForm" id="callback_form" onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-md-6">
          <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
        </div>

        <div className="col-md-6">
          <input type="tel" name="phone" id="phone" className="form-control" placeholder="Phone Number" required />
        </div>

        <div className="col-md-6">
          <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
        </div>

        <div className="col-md-6">
          <div className="relative">
            <select name="best_time" id="best_time" className="form-control" defaultValue="">
              <option value="" disabled>Best Time to Call</option>
              <option value="morning">Morning (9 AM – 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
              <option value="evening">Evening (3 PM – 6 PM)</option>
              <option value="anytime">Anytime</option>
            </select>
            <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
          </div>
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            id="message"
            className="form-control h-150px"
            placeholder="Your Message (optional)"
          />
        </div>

        <div className="col-md-12">
          <div className="text-start">
            <button
              type="submit"
              id="send_message"
              className="btn-main"
              disabled={submitting}
              style={{
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
