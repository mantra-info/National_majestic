"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CallbackPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Listen for clicks on any element with data-callback-modal
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-callback-modal]");
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
      setIsOpen(false);
      router.push("/thank-you");
    } catch {
      setSubmitting(false);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) setIsOpen(false); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#0D1130",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "500px",
          padding: "44px 40px 40px",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "14px",
            right: "18px",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.45)",
            fontSize: "26px",
            lineHeight: 1,
            cursor: "pointer",
            padding: "2px 6px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
        >
          &times;
        </button>

        {/* Heading */}
        <div style={{ marginBottom: "28px" }}>
          <div
            className="subtitle s2"
            style={{ marginBottom: "10px", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Get In Touch
          </div>
          <h3 className="text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Request a Callback
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: 0 }}>
            Our team will reach out within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email (optional)"
              />
            </div>
            <div className="col-6">
              <select name="best_time" className="form-control" defaultValue="">
                <option value="" disabled>Best Time to Call</option>
                <option value="morning">Morning (9 AM – 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
                <option value="evening">Evening (3 PM – 6 PM)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message (optional)"
                style={{ height: "90px" }}
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn-main w-100"
                disabled={submitting}
                style={{
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  width: "100%",
                }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
