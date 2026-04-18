import Script from "next/script";

const roomTabs = [
  {
    name: "Living Room",
    area: "20 m²",
    image: "/images/discover-rooms/l1.webp",
    description:
      "A spacious and elegant living area designed for comfort and style. Perfect for relaxing moments and welcoming guests with a modern touch."
  },
  {
    name: "Dinning Room",
    area: "15 m²",
    image: "/images/discover-rooms/l2.webp",
    description:
      "A well-planned dining space that brings families together. Designed for comfort, warmth, and memorable dining experiences."
  },
  {
    name: "Kitchen",
    area: "15 m²",
    image: "/images/discover-rooms/l3.webp",
    description:
      "A modern kitchen with smart layout and quality finishes. Built for convenience, functionality, and everyday ease."
  },
  {
    name: "Master Bedroom",
    area: "16 m²",
    image: "/images/discover-rooms/l4.webp",
    description:
      "A peaceful and private retreat with ample space and natural light. Designed to provide comfort, relaxation, and luxury living."
  },
  {
    name: "Bathroom",
    area: "6 m²",
    image: "/images/discover-rooms/l5.webp",
    description:
      "Stylish and well-equipped bathrooms with high-quality fittings. Designed for hygiene, comfort, and a refreshing experience."
  }
];

const galleryItems = [
  ["interior", "/images/gallery/l1.webp"],
  ["interior", "/images/gallery/l2.webp"],
  ["interior", "/images/gallery/l3.webp"],
  ["interior", "/images/gallery/l4.webp"],
  ["interior", "/images/gallery/l5.webp"],
  ["exterior", "/images/gallery/l6.webp"],
  ["exterior", "/images/gallery/l7.webp"],
  ["exterior", "/images/gallery/l8.webp"],
  ["facilities", "/images/gallery/l9.webp"],
  ["facilities", "/images/gallery/l10.webp"],
  ["facilities", "/images/gallery/l11.webp"],
  ["facilities", "/images/gallery/l12.webp"]
] as const;

const floorplanRows = [
  ["Apartment Type", "3 & 4 BHK"],
  ["Total Units", "83 Units"],
  ["Plot Area", "1661 – 2555 sq.ft"],
  ["Starting Price", "₹1.75 Cr Onwards"],
  ["Status", "Ongoing"],
  ["RERA No.", "K-RERA/PRJ/ERN/156/2025"],
  ["Location", "Pathadipalam, Edappally"],
  ["Floors", "G + 14 Floors"]
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
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="/">
                          <img className="logo-main" src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "60px", width: "auto" }} />
                          <img className="logo-scroll" src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "50px", width: "auto" }} />
                          <img className="logo-mobile" src="/assets/images/national-royal-palace-logo.png" alt="National Royal Palace" style={{ maxHeight: "44px", width: "auto" }} />
                        </a>
                      </div>
                    </div>

                    <div className="de-flex-col">
                      <div className="de-flex-col header-col-mid">
                        <ul id="mainmenu">
                          <li>
                            <a className="menu-item" href="#">
                              Home
                            </a>
                            <ul className="mega">
                              <li>
                                <div className="container">
                                  <div className="sb-menu p-4">
                                    <div className="row g-3">
                                      {[
                                        ["Single Property 1", "/images/demo/homepage-1.webp", "/"],
                                        ["Single Property 2", "/images/demo/homepage-2.webp", "#"],
                                        ["Single Property 3", "/images/demo/homepage-6.webp", "#"],
                                        ["New: Single Property 4", "/images/demo/homepage-7.webp", "#"],
                                        ["Apartment 1", "/images/demo/homepage-3.webp", "#"],
                                        ["Apartment 2", "/images/demo/homepage-4.webp", "#"],
                                        ["Single Apartment", "/images/demo/homepage-5.webp", "#"],
                                        ["Coming Soon", "/images/demo/coming-soon.webp", "#"]
                                      ].map(([label, image, href]) => (
                                        <div key={label} className="col-lg-3 col-md-4 col-sm-6 text-center">
                                          <div className="relative hover text-center overflow-hidden soft-shadow">
                                            <a className="p-0" href={href}>
                                              <img
                                                src={image}
                                                className="w-100 relative hover-scale-1-1"
                                                alt={label}
                                              />
                                            </a>
                                          </div>
                                          <h6 className="mt-3">{label}</h6>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-overview">
                              Overview
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-rooms">
                              Rooms
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-gallery">
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a className="menu-item" href="#section-floorplan">
                              Floorplan
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
                      <a className="btn-main fx-slide w-100" href="#section-contact">
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

        <section id="section-hero" className="text-light no-top no-bottom relative overflow-hidden z-1000">
          <div className="abs w-100 z-2" style={{ bottom: "60px" }}>
            <div className="container">
              <div className="row g-3 justify-content-center justify-content-lg-end">
                <div className="col-12 col-sm-10 col-md-6 col-lg-4 text-center text-lg-start">
                  <a className="btn-main btn-line bg-blur fx-slide me-2 mb-2" href="#section-contact">
                    <span>Request a Callback</span>
                  </a>
                  <a className="btn-main btn-line bg-blur fx-slide mb-2" href="#section-overview">
                    <span>Explore Property</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-center">
            <div className="swiper">
              <div className="swiper-wrapper">
                {["gbp22.jpg", "Royal-Palace_Grid_Post_.jpg.jpeg"].map((image) => (
                  <div key={image} className="swiper-slide">
                    <div
                      className="swiper-inner"
                      data-bgimage={`url(/assets/images/${image})`}
                      style={{
                        backgroundImage: `url(/assets/images/${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="sw-overlay op-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="abs w-100 bottom-0 z-2 pb-4 sm-hide">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between">
                    {["Spacious Rooms", "Private Garden", "Walk-in Closets", "Swimming Pool"].map((item) => (
                      <div key={item}>
                        <h6>{item}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-overview">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-5">
                <div className="ps-lg-3">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Home Overview
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    A Perfect Balance of Comfort, Design, and Everyday Convenience.
                  </h2>
                  {/* <p className="wow fadeInUp" data-wow-delay=".6s">
                    Non anim in pariatur in ex excepteur commodo do officia amet incididunt ullamco nostrud aliquip
                    minim magna esse dolore..
                  </p> */}

                  <a className="btn-main fx-slide" href="#section-contact">
                    <span>Request a Callback</span>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-4">
                  {[
                    ["fa-solid fa-tree", "Terrace Garden & Party Area", "Enjoy stunning views and host memorable moments in a premium rooftop setting."],
                    ["fa-solid fa-dumbbell", "Fully Equipped Fitness Centre", "Stay active and healthy with a modern gym featuring essential equipment for your daily workouts."],
                    ["fa-solid fa-child-reaching", "Children’s Play Area", "A safe and engaging space where children can play, explore, and enjoy their time freely."],
                    ["fa-solid fa-bolt", "24/7 Power Backup", "Reliable power backup system ensuring uninterrupted comfort at all times."],
                    ["fa-solid fa-droplet", "Rainwater Harvesting System", "Eco-friendly water management system designed to support sustainable living."],
                    ["fa-solid fa-people-roof", "Multipurpose Hall", "A flexible space ideal for events, celebrations, and community gatherings."]
                  ].map(([icon, title, description]) => (
                    <div key={title} className="col-md-6">
                      <div className="h-100 rounded-1">
                        <i className={`${icon} fa-3x id-color mb-4 wow scaleIn d-block`} />
                        <div className="relative wow fadeInUp">
                          <h4>{title}</h4>
                          <p className="mb-0">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-rooms" className="bg-dark section-dark text-light">
          <div className="container">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Room Details
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Discover Rooms
                </h2>
              </div>
            </div>
            <div className="row g-4 gx-5 justify-content-center wow fadeInUp">
              <div className="col-lg-12">
                <div className="de-tab pill">
                  <ul className="d-tab-nav mb-4">
                    {roomTabs.map((room, index) => (
                      <li key={room.name} className={index === 0 ? "active-tab" : undefined}>
                        {room.name}
                      </li>
                    ))}
                  </ul>
                  <ul className="d-tab-content pt-3">
                    {roomTabs.map((room) => (
                      <li key={room.name}>
                        <div className="row g-4 justify-content-between">
                          <div className="col-lg-4">
                            <div className="relative bg-dark-2 rounded-1 h-100">
                              <h3 className="fs-32 mb-4 p-40">{room.name}</h3>
                              <div className="abs p-sm-relative bottom-0 p-40 start-0 w-100">
                                <p className="mb-0">{room.description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-8">
                            <div className="relative">
                              <div className="bg-blur abs p-2 bottom-0 rounded-2 px-4 m-4 text-white">
                                <h4 className="mb-0">{room.area}</h4>
                              </div>
                              <img src={room.image} className="w-100 rounded-1" alt={room.name} />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-gallery" className="bg-color-op-1">
          <div className="container">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Dicover Gallery
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Exterior &amp; Interior
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <ul id="filters" className="wow fadeInUp" data-wow-delay="0s">
                  <li>
                    <a href="#" data-filter="*" className="selected">
                      View All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".exterior">
                      Exterior
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".interior">
                      Interior
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".facilities">
                      Facilities
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="gallery" className="row g-3 wow fadeInUp" data-wow-delay=".3s">
              {galleryItems.map(([type, image]) => (
                <div key={image} className={`col-md-4 col-sm-6 col-12 item ${type}`}>
                  <a href={image} className="image-popup d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <div className="absolute start-0 w-100 hover-op-1 p-5 abs-middle z-2 text-center text-white z-3">
                        View
                      </div>
                      <div className="absolute start-0 w-100 h-100 overlay-dark-7 hover-op-1 z-2" />
                      <img src={image} className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </a>
                </div>
              ))}
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
                    Home Floorplans
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    National Royal Palace offers premium 3 & 4 BHK luxury apartments at Pathadipalam, Edappally —
                    thoughtfully crafted with contemporary design and superior construction quality for refined urban living.
                  </p>

                  <div className="relative overflow-hidden">
                    {floorplanRows.map(([label, value], index) => (
                      <div key={label} className={`d-flex px-4 py-2 ${index % 2 === 0 ? "bg-dark-2" : ""}`}>
                        <div className="w-60">{label}</div>
                        <div className="w-40 fw-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="owl-carousel owl-theme owl-single-dots">
                  {[
                    ["14TH-FLOOR-PLAN-scaled.jpg", "14th Floor Plan"],
                    ["TYPICAL-LAYOUT-scaled.jpg", "Typical Layout"],
                    ["FIRST-FLOOR-LAYOUT-1-scaled.jpg", "First Floor Layout"],
                    ["GROUND-FLOOR-PLAN-2-scaled.jpg", "Ground Floor Plan"],
                    ["BASEMENT-FLOOR-PLAN-scaled.jpg", "Basement Floor Plan"],
                    ["TERRACE-FLOOR-PLAN-scaled.jpg", "Terrace Floor Plan"],
                    ["SWIMMING-POOL-LEVEL-PLAN-2-scaled.jpg", "Swimming Pool Level"],
                    ["FLAT-A-1-1-scaled.jpg", "Flat A-1"],
                    ["FLAT-A-2-scaled.jpg", "Flat A-2"],
                    ["FLAT-B-2-scaled.jpg", "Flat B"],
                    ["FLAT-B1-scaled.jpg", "Flat B-1"],
                    ["FLAT-C-2-scaled.jpg", "Flat C"],
                    ["FLAT-C1-scaled.jpg", "Flat C-1"],
                    ["FLAT-D-2-scaled.jpg", "Flat D"],
                    ["FLAT-D1-scaled.jpg", "Flat D-1"],
                    ["FLAT-E-2-scaled.jpg", "Flat E"],
                    ["FLAT-F-2-scaled.jpg", "Flat F"]
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
              </div>
            </div>

            <div className="spacer-double" />

            <div className="row g-3">
              {[
                ["Plot Area", "/images/svg/size.svg", "1661 – 2555 sqft"],
                ["Bedrooms", "/images/svg/bed.svg", "3 – 4 BHK"],
                ["Total Units", "/images/svg/bath.svg", "83 Units"],
                ["Parking Slots", "/images/svg/car.svg", "1 Per Unit"]
              ].map(([title, icon, value]) => (
                <div key={title} className="col-md-3 col-6">
                  <div className="bg-dark-2 py-4 rounded-1 text-center">
                    <h4>{title}</h4>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={icon} className="w-40px me-3" alt="" />
                      <div>{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container relative z-2">
            <div className="row g-4 gx-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">
                  Near by Places
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Highlights Nearby
                </h2>
              </div>
            </div>

            <div className="row g-4">
              {[
                ["LuLu Mall, Edappally", "2 km", "/assets/images/nearby/lulu-mall.jpg"],
                ["Amrita Institute of Medical Sciences", "3 km", "/assets/images/nearby/aims-kochi.jpg"],
                ["Amrita Vishwa Vidyapeetham", "3 km", "/assets/images/nearby/amrita-campus.jpg"],
                ["Edappally Metro Station", "1 km", "/assets/images/nearby/edappally-metro.jpg"]
              ].map(([label, distance, image]) => (
                <div key={label} className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="overflow-hidden rounded-1 text-light wow zoomIn" data-wow-delay=".0s" style={{ height: "280px", position: "relative" }}>
                    <img
                      src={image}
                      alt={label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
                      zIndex: 1
                    }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px", zIndex: 2 }}>
                      <h5 className="mb-1 text-white lh-sm" style={{ wordBreak: "break-word" }}>{label}</h5>
                      <span className="text-white fs-14 fw-500 opacity-75">{distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="section" className="p-0 section-dark">
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
        </section>

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
              <div className="col-md-3">
                <div className="text-center">
                  <img src="/images/agents/1.webp" className="w-100 rounded-1" alt="" />

                  <div className="mt-3">
                    <h4 className="mb-0">National Builders</h4>
                    <div className="fw-500 id-color">+91 98475 33355</div>
                    <div className="fw-500 id-color">+91 98475 44222</div>
                    <div className="fw-500 id-color mt-1">marketingkochi@nationalbuilders.in</div>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <form name="callbackForm" id="callback_form" method="post" action="#">
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
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <div className="text-start">
                        <div id="submit">
                          <input type="submit" id="send_message" value="Send Message" className="btn-main" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="success_message_col" className="success">
                  Your message has been sent successfully. Refresh this page if you want to send more messages.
                </div>
                <div id="error_message" className="error">
                  Sorry there was an error sending your form.
                </div>
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
                src="/assets/images/national-royal-palace-logo.png"
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
                <li><a href="#section-overview" className="text-white opacity-75 text-decoration-none">Overview</a></li>
                <li><a href="#section-rooms" className="text-white opacity-75 text-decoration-none">Rooms</a></li>
                <li><a href="#section-gallery" className="text-white opacity-75 text-decoration-none">Gallery</a></li>
                <li><a href="#section-floorplan" className="text-white opacity-75 text-decoration-none">Floorplan</a></li>
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
