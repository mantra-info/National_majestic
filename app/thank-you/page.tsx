export default function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07091A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <img
        src="/assets/images/national-majestic-logo.png"
        alt="National Majestic"
        style={{ maxWidth: "160px", marginBottom: "48px", opacity: 0.92 }}
      />

      {/* Icon */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "rgba(204,31,45,0.12)",
          border: "1px solid rgba(204,31,45,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "28px",
        }}
      >
        <i className="fa-solid fa-check" style={{ color: "#CC1F2D", fontSize: "28px" }} />
      </div>

      {/* Message */}
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "3.5px",
          textTransform: "uppercase",
          color: "#CC1F2D",
          marginBottom: "16px",
        }}
      >
        Thank You
      </div>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 500,
          color: "#fff",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        We'll Be in Touch Soon
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "15px",
          maxWidth: "420px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Thank you for your interest in National Majestic. Our team will call you back within 24 hours.
      </p>

      {/* Divider */}
      <div
        style={{
          width: "48px",
          height: "1px",
          background: "rgba(204,31,45,0.5)",
          marginBottom: "40px",
        }}
      />

      <a
        href="/"
        className="btn-main fx-slide"
        style={{ textDecoration: "none" }}
      >
        <span>Back to Home</span>
      </a>

      {/* Contact strip */}
      <div
        style={{
          marginTop: "56px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          color: "rgba(255,255,255,0.4)",
          fontSize: "13px",
        }}
      >
        <a href="tel:+919847533355" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
          <i className="fa-solid fa-phone" style={{ color: "#CC1F2D", marginRight: "6px" }} />
          +91 98475 33355
        </a>
        <a href="mailto:marketingkochi@nationalbuilders.in" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
          <i className="fa-solid fa-envelope" style={{ color: "#CC1F2D", marginRight: "6px" }} />
          marketingkochi@nationalbuilders.in
        </a>
      </div>
    </div>
  );
}
