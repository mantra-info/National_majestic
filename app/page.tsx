import Script from "next/script";
import TestimonialsSection from "./TestimonialsSection";
import CallbackPopup from "./CallbackPopup";
import ContactForm from "./ContactForm";


const latestProjects = [
  {
    name: " Signature Tower 2",
    location: "Cheranalloor,Edappally",
    type: "Premium Apartments",
    image: "/assets/images/gallery/glry-1.jpg",
    status: "Ongoing"
  },
  {
    name: "National Shalom",
    location: "Thiruvalla, Kerala",
    type: "Luxury Residences",
    image: "/assets/images/gallery/glry-2.jpg",
    status: "Sold Out"
  },
  {
    name: "Treedom Park Tower 2 - Luxury Apartments",
    location: "Vyttila, Kochi",
    type: "Premium Apartments",
    image: "/assets/images/gallery/glry-3.jpg",
    status: "Ready to Move"
  },
  {
    name: "National Kingdom",
    location: "Palarivattom, Kochi",
    type: "Luxury Residences",
    image: "/assets/images/gallery/glry-4.jpg",
    status: "Ready to Move"
  }
];

function statusBadgeColor(status: string) {
  if (status === "Sold Out") return "#e05c5c";
  if (status === "Ready to Move") return "#5fc98e";
  return "var(--primary-color, #c9a96e)";
}

const floorplanRows = [
  ["Apartment Type", "3 & 4 BHK"],
  ["Total Units", "20 Units"],
  ["Plot Area", "2124 – 3917 sq.ft"],
  ["Starting Price", "₹2.35 Cr Onwards"],
  ["Status", "Ongoing"],
  ["RERA No.", "K-RERA/PRJ/ERN/032/2023"],
  ["Location", "Edappally, Kochi"],
  ["Floors", "B + G + 12 Floors"]
];


export default function HomePage() {
  return (
    <>
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span>
            <a href="#">Scroll to top</a>
          </span>
        </div>
        <div className="scrollbar-v show-on-scroll" />

        <div id="de-loader" />

        <header className="transparent header-light header-float">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="header-inner">
                  <div className="de-flex">
                    <div className="de-flex-col" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div id="logo">
                        <a href="/">
                          <img className="logo-main" src="/assets/images/national-majestic-logo.png" alt="National Royal Palace" style={{ maxHeight: "60px", width: "auto" }} />
                          <img className="logo-scroll" src="/assets/images/national-majestic-logo.png" alt="National Royal Palace" style={{ maxHeight: "50px", width: "auto" }} />
                          <img className="logo-mobile" src="/assets/images/national-majestic-logo.png" alt="National Royal Palace" style={{ maxHeight: "44px", width: "auto" }} />
                        </a>
                      </div>
                      <img
                        src="/assets/images/40-years-excellence.png"
                        alt="40 Years of Excellence"
                        style={{ height: "52px", width: "52px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                      />
                    </div>

                    <div className="de-flex-col">
                      <div className="de-flex-col header-col-mid">
                        <ul id="mainmenu">
                          <li>
                            <a className="menu-item" href="#">Home</a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-about">
                              About
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-overview">
                              Overview
                            </a>
                          </li>

                          <li>
                            <a className="menu-item" href="#section-projects">
                              Projects
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-floorplan">
                              Floorplan
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-testimonials">
                              Testimonials
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-contact">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="de-flex-col">
                      <a className="btn-main fx-slide w-100" href="#" data-callback-modal="true">
                        <span>Request a Callback</span>
                      </a>

                      <div className="menu_side_area">
                        <span id="menu-btn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="section-hero" className="text-light no-top no-bottom relative overflow-hidden z-1000" style={{ minHeight: "100vh" }}>

          {/* Centre text overlay */}
          <div className="abs w-100 z-2 text-center hero-content-overlay" style={{ top: "58%", transform: "translateY(-50%)" }}>
            <div className="container">
              {/* <div className="hero-tagline wow fadeInUp">Edappally, Kochi</div> */}
              <h1 className="hero-title wow fadeInUp" data-wow-delay=".15s">
                Live the<br />Majestic Life
              </h1>
              <p className="wow fadeInUp mt-3 mb-4" data-wow-delay=".25s" style={{ fontSize: "14px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Ultra-Premium 3 &amp; 4 BHK Apartments
              </p>
              <div className="wow fadeInUp d-flex gap-3 justify-content-center flex-wrap" data-wow-delay=".35s">
                <a className="btn-main fx-slide" href="#" data-callback-modal="true">
                  <span>Request a Callback</span>
                </a>
                <a className="btn-main btn-line fx-slide" href="#section-about">
                  <span>Explore Property</span>
                </a>
              </div>
            </div>
          </div>

          {/* Background video – desktop */}
          <div
            className="sm-hide"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              overflow: "hidden"
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/majestic-hero-1.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            >
              <source src="https://nationalbuilders.in/wp-content/uploads/2025/08/MAJESTIC-NATIONL.mp4" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)" }} />
          </div>

          {/* Background image – mobile/tablet fallback (sm-hide hides video at ≤992px) */}
          <div
            className="d-block d-lg-none"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: "url(/assets/images/majestic-hero-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "65% center"
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
          </div>

          {/* Bottom info bar */}
          <div className="abs w-100 bottom-0 z-2 pb-4 hero-stats-bar" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)" }}>
            <div className="container pt-3">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  {[
                    ["40+", "Years Experience"],
                    ["135+", "Projects"],
                    ["24/7", "Homecare Support"],
                    ["Since", "1986"]
                  ].map(([label, sub]) => (
                    <div key={label} className="hero-bar-item">
                      <strong>{label}</strong>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-about">
          <div className="container">
            <div className="row g-5 align-items-center justify-content-between">

              {/* Image side */}
              <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                <div className="position-relative">
                  <img
                    src="/assets/images/abt.png"
                    className="w-100 rounded-1"
                    alt="National Majestic"
                    style={{ objectFit: "cover", maxHeight: "560px" }}
                  />
                  {/* 40 Years of Excellence badge */}
                  {/* <div
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      position: "absolute",
                      bottom: "24px",
                      right: "24px",
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                      border: "3px solid rgba(201,169,110,0.4)",
                    }}
                  >
                    <img
                      src="/assets/images/40-years-excellence.png"
                      alt="40 Years of Excellence"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div> */}
                </div>
              </div>

              {/* Content side */}
              <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">About Us</div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  National Majestic
                </h2>
                <div
                  className="wow fadeInUp mb-1"
                  data-wow-delay=".35s"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}
                >
                  <i className="fa-solid fa-location-dot id-color" />
                  <span className="fw-500">Edappally, Kochi &nbsp;·&nbsp; 3 &amp; 4 BHK Residential Apartments</span>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  National Majestic by National Builders is a premier residential project located in the heart of Edappally, Kochi. Offering ultra-luxury 3 and 4 BHK apartments, this project combines modern architecture with premium amenities — providing a sophisticated and comfortable living experience for discerning homebuyers.
                </p>
                <p className="wow fadeInUp" data-wow-delay=".45s">
                  National Builders is a visionary real estate development firm specialising in architecturally distinct residential and mixed-use projects in Navi Mumbai and Kerala. Our dedicated homecare department is available 24/7 to assist customers, and our after-sales team attends to all repair and maintenance needs.
                </p>

                <div className="row g-3 mt-2 wow fadeInUp" data-wow-delay=".5s">
                  {[
                    ["fa-solid fa-shield-halved", "RERA Approved", "K-RERA/PRJ/ERN/032/2023"],
                    ["fa-solid fa-building", "Premium Location", "Heart of Edappally"],
                    ["fa-solid fa-star", "Luxury Lifestyle", "3 & 4 BHK Apartments"]
                  ].map(([icon, label, value]) => (
                    <div key={label} className="col-sm-4">
                      <div className="about-badge">
                        <i className={`${icon} fa-2x id-color mb-2 d-block`} />
                        <div className="fw-600" style={{ fontSize: "13px" }}>{label}</div>
                        <div className="opacity-60" style={{ fontSize: "11px", marginTop: "3px" }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a className="btn-main fx-slide mt-4" href="#" data-callback-modal="true">
                  <span>For More Details</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        <section id="section-overview">
          <div className="container">

            {/* Heading row */}
            <div className="row g-4 justify-content-between align-items-center mb-5">
              <div className="col-lg-6">
                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                  Home Overview
                </div>
                <h2 className="wow fadeInUp mb-0" data-wow-delay=".4s">
                  A Premium home for your comfort and convenience.
                </h2>
              </div>
              <div className="col-lg-4 text-lg-end wow fadeInUp" data-wow-delay=".5s">
                <a className="btn-main fx-slide" href="#" data-callback-modal="true">
                  <span>Request a Callback</span>
                </a>
              </div>
            </div>

            {/* Amenity cards grid */}
            <div className="row g-4">
              {[
                ["fa-solid fa-person-swimming", "Rooftop Swimming Pool", "Relax and unwind with a rooftop pool offering a refreshing experience and open views."],
                ["fa-solid fa-champagne-glasses", "Terrace Garden & Party Area", "A pleasant rooftop space designed for small gatherings, celebrations, and relaxed evenings."],
                ["fa-solid fa-dumbbell", "Fully Equipped Fitness Centre", "A well-designed gym space to help you stay active and maintain a healthy routine."],
                ["fa-solid fa-child-reaching", "Children’s Play Area", "A safe and comfortable area where children can play and spend time freely."],
                ["fa-solid fa-people-roof", "Multipurpose Hall", "A convenient space for functions, meetings, and community activities."],
                ["fa-solid fa-gamepad", "Indoor Games Area", "A dedicated space for indoor activities and leisure time with family and friends."],
                ["fa-solid fa-bolt", "24/7 Power Backup", "Ensures continuous power supply for essential services and common areas."],
                ["fa-solid fa-shield-halved", "Advanced Security System", "CCTV surveillance and controlled access for a safe and secure living environment."],
                ["fa-solid fa-charging-station", "EV Charging Station", "Facility for electric vehicle charging to support modern living needs."],
                ["fa-solid fa-couch", "Visitor’s Lounge", "A comfortable space to welcome and attend guests."],
                ["fa-solid fa-bed", "Guest Room Facility", "Provision for guest stay within the premises for added convenience."],
                ["fa-solid fa-droplet", "Rainwater Harvesting System", "A sustainable solution for efficient water management."]
              ].map(([icon, title, description]) => (
                <div key={title} className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                  <div className="facility-card">
                    <i className={`${icon} id-color d-block`} />
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        <section id="section-projects" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Our Portfolio
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Latest Projects
                </h2>
                <p className="wow fadeInUp opacity-75" data-wow-delay=".3s">
                  A legacy of 135+ landmark developments built on trust, quality, and enduring vision across Kerala and Navi Mumbai.
                </p>
              </div>
            </div>

            <div className="row g-3 wow fadeInUp" data-wow-delay=".2s">
              {/* Featured large card */}
              <div className="col-lg-6">
                <div
                  className="position-relative overflow-hidden rounded-1 hover"
                  style={{ height: "540px" }}
                >
                  <img
                    src={latestProjects[0].image}
                    alt={latestProjects[0].name}
                    className="hover-scale-1-1"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }} />
                  <div style={{ position: "absolute", top: "20px", right: "20px" }}>
                    <span style={{ background: statusBadgeColor(latestProjects[0].status), color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", padding: "5px 14px", borderRadius: "2px", textTransform: "uppercase" }}>
                      {latestProjects[0].status}
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-color, #c9a96e)" }} />
                      {latestProjects[0].location}
                    </div>
                    <h3 className="text-white mb-1">{latestProjects[0].name}</h3>
                    <div style={{ color: "var(--primary-color, #c9a96e)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}>{latestProjects[0].type}</div>
                  </div>
                </div>
              </div>

              {/* 3 stacked cards */}
              <div className="col-lg-6 d-flex flex-column gap-3">
                {latestProjects.slice(1).map((project) => (
                  <div
                    key={project.name}
                    className="position-relative overflow-hidden rounded-1 hover flex-grow-1"
                    style={{ minHeight: "164px" }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="hover-scale-1-1"
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, transition: "transform 0.5s ease" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)" }} />
                    <div style={{ position: "absolute", top: "16px", right: "16px" }}>
                      <span style={{ background: statusBadgeColor(project.status), color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", padding: "4px 10px", borderRadius: "2px", textTransform: "uppercase" }}>
                        {project.status}
                      </span>
                    </div>
                    <div style={{ position: "absolute", bottom: "22px", left: "28px", right: "28px" }}>
                      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginBottom: "5px", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-color, #c9a96e)", fontSize: "11px" }} />
                        {project.location}
                      </div>
                      <h5 className="text-white mb-1 project-card-title" style={{ lineHeight: 1.3, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", wordBreak: "break-word", whiteSpace: "normal" }}>{project.name}</h5>
                      <div style={{ color: "var(--primary-color, #c9a96e)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px" }}>{project.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="section-floorplan" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <div className="pe-lg-3">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Discover
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                     Floor plans
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    National Majestic offers ultra-premium 3 & 4 BHK apartments in the heart of Edappally, Kochi —
                    combining modern architecture, premium finishes, and world-class amenities for a truly superlative lifestyle.
                  </p>

                  <div className="relative">
                    {floorplanRows.map(([label, value], index) => (
                      <div key={label} className={`px-3 py-2 ${index % 2 === 0 ? "bg-dark-2" : ""}`} style={{ display: "grid", gridTemplateColumns: "44% 1fr", gap: "8px", alignItems: "start" }}>
                        <div style={{ opacity: 0.75 }}>{label}</div>
                        <div className="fw-600" style={{ wordBreak: "break-all", overflowWrap: "anywhere" }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="owl-carousel owl-theme" id="fp-carousel">
                  {[
                    ["floor-1.jpg", "Basement Floor Plan"],
                    ["floor-2.jpg", "Ground Floor"],
                    ["floor-3.jpg", "First Floor"],
                    ["floor-4.jpg", "Typical Floor Plan (2nd to 10th)"],
                    ["typeA.jpeg", "Type A"],
                    ["typeB.jpeg", "Type B"],
                    ["floor-5.jpg", "11th Floor Plan"],
                    ["floor-6.jpg", "12th Floor Plan"]
                  ].map(([file, label]) => (
                    <div key={file} className="relative">
                      <img
                        src={`/assets/images/floorplans/${file}`}
                        className="w-100 wow fadeInUp"
                        data-wow-delay=".2s"
                        alt={label}
                      />
                      <div className="abs bottom-0 start-0 bg-blur px-4 py-2 m-3 rounded-1 text-white">
                        <h6 className="mb-0">{label}</h6>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floor plan navigation buttons */}
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4 wow fadeInUp" data-wow-delay=".3s">
                  <button
                    id="fp-prev"
                    aria-label="Previous floor plan"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "16px",
                      transition: "background 0.2s",
                    }}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </button>
                  <span style={{ fontSize: "13px", opacity: 0.6, letterSpacing: "0.5px" }}>Swipe or click to explore floor plans</span>
                  <button
                    id="fp-next"
                    aria-label="Next floor plan"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "16px",
                      transition: "background 0.2s",
                    }}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-nearby" className="bg-dark section-dark text-light" style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)" }}>
          <div className="container">

            {/* Heading */}
            <div className="row justify-content-between align-items-end mb-5">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".0s">
                <div className="subtitle s2 mb-3">Near by Places</div>
                <h2 className="mb-0">Highlights Nearby</h2>
              </div>
              <div className="col-lg-5 wow fadeInRight" data-wow-delay=".2s">
                <p className="mb-0 opacity-75">
                  Strategically situated at the heart of Edappally — Kochi's most connected address — with premium destinations just minutes away.
                </p>
              </div>
            </div>

            {/* Category cards row */}
            <div className="row g-3">
              {[
                {
                  icon: "fa-solid fa-bag-shopping",
                  category: "Shopping &\nEntertainment",
                  color: "#e8a838",
                  items: [["LuLu Mall", "0.6 km"], ["Reliance Digital", "0.4 km"]]
                },
                {
                  icon: "fa-solid fa-graduation-cap",
                  category: "Educational\nInstitutions",
                  color: "#4e9fd4",
                  items: [["Amrita School of Business", "2.9 km"]]
                },
                {
                  icon: "fa-solid fa-hospital",
                  category: "Healthcare",
                  color: "#e05c5c",
                  items: [["Amrita Institute of Medical Sciences", "Nearby"],["MAJ Hospital", "200 m"]]
                },
                {
                  icon: "fa-solid fa-road",
                  category: "Connectivity",
                  color: "#5fc98e",
                  items: [["Edappally Junction", "400 m"], ["NH 66 & NH 47", "Excellent"]]
                },
                {
                  icon: "fa-solid fa-bus",
                  category: "Transport",
                  color: "#a57fe8",
                  items: [["Bus Stops", "100 m"], ["Railway Station", "~4 km"]]
                },
                {
                  icon: "fa-solid fa-city",
                  category: "City Access",
                  color: "#4ec8c8",
                  items: [["Kochi City Centre", "Well connected"], ["Metro & Road", "Excellent"]]
                }
              ].map(({ icon, category, color, items }, idx) => (
                <div key={category} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 0.08}s`}>
                  <div
                    className="h-100 rounded-1 position-relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "28px 28px 24px",
                      transition: "border-color 0.3s, background 0.3s"
                    }}
                  >
                    {/* Accent bar */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: color, borderRadius: "4px 0 0 4px" }} />

                    {/* Icon + category */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div
                        style={{
                          width: "52px", height: "52px", borderRadius: "12px",
                          background: `${color}22`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <i className={icon} style={{ color, fontSize: "22px" }} />
                      </div>
                      <h5 className="mb-0 lh-sm" style={{ whiteSpace: "pre-line" }}>{category}</h5>
                    </div>

                    {/* Items */}
                    <div className="d-flex flex-column gap-2">
                      {items.map(([name, dist]) => (
                        <div
                          key={name}
                          className="d-flex align-items-center justify-content-between"
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "10px", gap: "8px" }}
                        >
                          <div className="d-flex align-items-center gap-2" style={{ minWidth: 0, flex: 1 }}>
                            <i className="fa-solid fa-circle-dot" style={{ color, fontSize: "8px", flexShrink: 0 }} />
                            <span style={{ fontSize: "13px", opacity: 0.85, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                          </div>
                          <span
                            style={{
                              fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px",
                              background: `${color}22`, color,
                              padding: "3px 10px", borderRadius: "20px", whiteSpace: "nowrap",
                              flexShrink: 0
                            }}
                          >
                            {dist}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map strip */}
            <div className="row mt-5 wow fadeInUp" data-wow-delay=".2s">
              <div className="col-12">
                <div className="rounded-1 overflow-hidden position-relative" style={{ height: "320px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8765937438!2d76.30192!3d10.02735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5a9e4f23d5%3A0x7e3c84f703b8e8c!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699999999999"
                    width="100%"
                    height="320"
                    style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="National Majestic Location"
                  />
                  <div
                    style={{
                      position: "absolute", top: "20px", left: "20px",
                      background: "rgba(0,0,0,0.85)", borderRadius: "8px",
                      padding: "12px 18px", backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-location-dot id-color" />
                      <div>
                        <div className="fw-700 text-white" style={{ fontSize: "14px" }}>National Majestic</div>
                        <div className="opacity-75" style={{ fontSize: "12px" }}>Edappally, Kochi, Kerala</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <section aria-label="section" className="p-0 section-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=C6rf51uHWJg">
                  <div className="relative overflow-hidden">
                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                      <div className="player circle wow scaleIn">
                        <span />
                      </div>
                    </div>
                    <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05" />
                    <img src="/images/background/2.webp" className="w-100 hover-scale-1-1" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <TestimonialsSection />

        <section id="section-contact">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Contact Us
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Request a Callback
                </h2>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {/* <div className="col-md-3">
                <div className="text-center">
                  <img src="/images/agents/1.webp" className="w-100 rounded-1" alt="" />

                  <div className="mt-3">
                    <h4 className="mb-0">National Builders</h4>
                    <div className="fw-500 id-color">+91 98475 33355</div>
                    <div className="fw-500 id-color">+91 98475 44222</div>
                    <div className="fw-500 id-color">+91 98477 17771</div>
                    <div className="fw-500 id-color mt-1">marketingkochi@nationalbuilders.in</div>
                  </div>
                </div>
              </div> */}

              <div className="">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="section-dark">
        <div className="container">
          <div className="row g-4 g-lg-5">

            {/* Brand + About + Social */}
            <div className="col-12 col-md-6 col-lg-4">
              <img
                src="/assets/images/national-majestic-logo.png"
                className="mb-4"
                alt="National Royal Palace"
                style={{ maxWidth: "160px", width: "100%", height: "auto" }}
              />
              <p className="fs-15 opacity-75">
                National Builders is a leading real estate developer with 135+ landmark projects across Navi Mumbai and Kerala, committed to quality and excellence.
              </p>
              <div className="social-icons mt-3">
                <a href="#"><i className="fa-brands fa-instagram" /></a>
                <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                <a href="#"><i className="fa-brands fa-youtube" /></a>
                <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="mb-3 mb-lg-4">Quick Links</h5>
              <ul className="list-unstyled mb-0" style={{ lineHeight: "2.4" }}>
                <li><a href="#" className="text-white opacity-75 text-decoration-none">Home</a></li>
                <li><a href="#section-about" className="text-white opacity-75 text-decoration-none">About</a></li>
                <li><a href="#section-overview" className="text-white opacity-75 text-decoration-none">Overview</a></li>

                <li><a href="#section-projects" className="text-white opacity-75 text-decoration-none">Projects</a></li>
                <li><a href="#section-floorplan" className="text-white opacity-75 text-decoration-none">Floorplan</a></li>
                <li><a href="#section-testimonials" className="text-white opacity-75 text-decoration-none">Testimonials</a></li>
                <li><a href="#section-contact" className="text-white opacity-75 text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Kochi Office */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3 mb-lg-4">Kochi Office</h5>
              <p className="fs-15 opacity-75 mb-3">
                National Pearl Star, 5th Floor,<br />
                High School Junction, Edappally,<br />
                Kochi, Kerala – 682024
              </p>
              <p className="fs-15 mb-1">
                <i className="fa-solid fa-phone me-2 id-color" />
                <a href="tel:+919847533355" className="text-white opacity-75 text-decoration-none">+91 98475 33355</a>
              </p>
              <p className="fs-15 mb-1">
                <i className="fa-solid fa-phone me-2 id-color" />
                <a href="tel:+919847544222" className="text-white opacity-75 text-decoration-none">+91 98475 44222</a>
              </p>
              <p className="fs-15 mb-1">
                <i className="fa-solid fa-phone me-2 id-color" />
                <a href="tel:+919847717771" className="text-white opacity-75 text-decoration-none">+91 98477 17771</a>
              </p>
              <p className="fs-15 mt-2 mb-0">
                <i className="fa-solid fa-envelope me-2 id-color" />
                <a href="mailto:marketingkochi@nationalbuilders.in" className="text-white opacity-75 text-decoration-none" style={{ wordBreak: "break-all" }}>marketingkochi@nationalbuilders.in</a>
              </p>
            </div>

            {/* Navi Mumbai Office */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-3 mb-lg-4">Navi Mumbai Office</h5>
              <p className="fs-15 opacity-75 mb-0">
                Sea Queen Heritage Building,<br />
                1st Floor, Plot 6, Sector 18,<br />
                Palm Beach Service Road, Sanpada,<br />
                Navi Mumbai – 400705
              </p>
            </div>

          </div>
        </div>

        <div className="subfooter mt-4 mt-lg-5">
          <div className="container">
            <div className="row align-items-center g-2">
              <div className="col-12 col-md-6 text-center text-md-start">
                Copyright &copy; 2025 National Builders. All Rights Reserved.
              </div>
              <div className="col-12 col-md-6 text-center text-md-end opacity-75 fs-14">
                Developed by <a href="https://web.mantrainfotechs.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">mits</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call + WhatsApp buttons */}
      <div style={{ position: "fixed", bottom: "24px", right: "20px", zIndex: 9999, display: "flex", flexDirection: "column", gap: "12px" }}>
        <a
          href="tel:+919847533355"
          aria-label="Call us"
          style={{
            width: "52px", height: "52px", borderRadius: "50%",
            background: "#2563eb", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(37,99,235,0.45)",
            fontSize: "20px", textDecoration: "none",
          }}
        >
          <i className="fa-solid fa-phone" />
        </a>
        <a
          href="https://wa.me/919847533355"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          style={{
            width: "52px", height: "52px", borderRadius: "50%",
            background: "#25D366", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
            fontSize: "22px", textDecoration: "none",
          }}
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
      </div>

      <CallbackPopup />

      <Script src="/assets/js/vendors.js" strategy="afterInteractive" />
      <Script src="/assets/js/designesia.js" strategy="afterInteractive" />
      <Script src="/assets/js/validation-booking.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom-swiper-2.js" strategy="afterInteractive" />
      <Script id="datepicker-init" strategy="afterInteractive">
        {`window.jQuery?.(function () {
          window.jQuery("#date").datepicker({
            autoclose: true,
            todayHighlight: true
          }).datepicker("update", new Date());
        });`}
      </Script>
      <Script id="fp-nav" strategy="afterInteractive">
        {`window.addEventListener("load", function () {
          window.setTimeout(function () {
            if (!window.jQuery || window._fpCarouselReady) return;
            window._fpCarouselReady = true;
            var $owl = window.jQuery("#fp-carousel");
            if ($owl.hasClass("owl-loaded")) {
              $owl.trigger("destroy.owl.carousel");
              $owl.removeClass("owl-loaded owl-drag");
            }
            $owl.owlCarousel({ loop: true, items: 1, nav: false, dots: true, smartSpeed: 500 });
            var prev = document.getElementById("fp-prev");
            var next = document.getElementById("fp-next");
            if (prev && next) {
              var np = prev.cloneNode(true); prev.parentNode.replaceChild(np, prev);
              var nn = next.cloneNode(true); next.parentNode.replaceChild(nn, next);
              np.addEventListener("click", function () { $owl.trigger("prev.owl.carousel"); });
              nn.addEventListener("click", function () { $owl.trigger("next.owl.carousel"); });
            }
          }, 300);
        });`}
      </Script>
      <Script id="template-load-fix" strategy="afterInteractive">
        {`window.setTimeout(function () {
          try {
            window.dispatchEvent(new Event("load"));
          } catch (e) {}

          window.setTimeout(function () {
            var loader = document.getElementById("de-loader");
            if (loader) {
              loader.style.display = "none";
            }
          }, 800);
        }, 150);`}
      </Script>
    </>
  );
}
