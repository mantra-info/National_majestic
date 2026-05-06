"use client";

import { useState } from "react";

const allVideos = [
  "https://nationalbuilders.in/wp-content/uploads/2025/08/2.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/3.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/4.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/5.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/06.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/7.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/0812.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/8.mp4",
  "https://nationalbuilders.in/wp-content/uploads/2025/08/FInal-Rama-menon-.mp4",
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allVideos : allVideos.slice(0, 3);

  return (
    <section id="section-testimonials" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 gx-5 justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
              Happy Home Owners
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Words from Our Customers
            </h2>
            <p className="wow fadeInUp opacity-75" data-wow-delay=".3s">
              Real stories from real families who chose National Builders for their dream home.
            </p>
          </div>
        </div>

        <div className="row g-3">
          {visible.map((src, i) => (
            <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(i % 3) * 0.1}s`}>
              <div
                className="rounded-1 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <video
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                  style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(true)}
              className="btn-main fx-slide"
              style={{ border: "none", cursor: "pointer" }}
            >
              <span>Load More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
