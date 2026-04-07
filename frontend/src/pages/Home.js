import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaCloud,
  FaArrowRight,
  FaCheckCircle,
  FaLaptopCode,
  FaRocket,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

import { siteImages } from "../utils/siteImages";

export function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section;
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      shortDesc:
        "Scalable, responsive and high-performance websites tailored for modern businesses.",
      details:
        "We build corporate websites, landing pages, portals, admin panels and custom web applications with strong performance and clean architecture.",
      points: [
        "Responsive business websites",
        "SEO-friendly structure",
        "Fast & secure performance",
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      shortDesc:
        "User-focused interfaces that improve engagement and create stronger digital experiences.",
      details:
        "From wireframes and prototypes to polished UI systems, we create attractive, intuitive and conversion-oriented product designs.",
      points: [
        "Wireframes & prototypes",
        "User-centered design flow",
        "Modern visual experience",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      shortDesc:
        "Reliable Android and iOS mobile apps with modern UI and seamless performance.",
      details:
        "We develop feature-rich mobile applications with secure authentication, API integrations and scalable architecture for long-term growth.",
      points: [
        "Android & iOS apps",
        "API integrations",
        "Smooth user experience",
      ],
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      shortDesc:
        "Search-focused strategies to improve rankings, traffic and online visibility.",
      details:
        "Our SEO services cover on-page optimization, technical improvements, keyword planning and site structure enhancements.",
      points: [
        "On-page SEO",
        "Technical optimization",
        "Organic growth strategy",
      ],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      shortDesc:
        "Performance-driven digital campaigns to generate leads and build brand visibility.",
      details:
        "We create result-focused marketing strategies across social media, paid ads and content channels to attract the right audience.",
      points: [
        "Social media campaigns",
        "Paid ad strategy",
        "Lead generation support",
      ],
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      shortDesc:
        "Secure cloud infrastructure and deployment services for scalable digital systems.",
      details:
        "We support cloud setup, migration, hosting, deployment workflows and infrastructure optimization for modern businesses.",
      points: [
        "Cloud deployment",
        "Scalable hosting",
        "Migration support",
      ],
    },
  ];

  const projects = [
    {
      title: "Corporate Website",
      description:
        "A professional company website with modern interface and responsive layout for a growing brand.",
      image: siteImages.project2,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with clean UI, product flow and secure checkout system.",
      image: siteImages.project1,
    },
    {
      title: "Business Dashboard",
      description:
        "An analytics dashboard for tracking reports, insights and team productivity with smart data visualization.",
      image: siteImages.project4,
    },
  ];

  const reasons = [
    {
      icon: <FaLaptopCode />,
      title: "Modern Technology Stack",
      desc: "We use updated tools and proven development practices for scalable digital products.",
    },
    {
      icon: <FaRocket />,
      title: "Growth-Focused Solutions",
      desc: "Every solution is designed to help your business perform better and grow faster.",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      desc: "Our designers and developers focus on quality, clarity and strong user experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliable Delivery",
      desc: "We prioritize timelines, clean execution and long-term support for every project.",
    },
  ];

  const revealClass = (key) =>
    visibleSections[key]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  const handleImageError = (e) => {
    e.currentTarget.src = siteImages.fallback;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_45%,#ffffff_100%)]">
        <div className="absolute left-[-80px] top-[-80px] h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:py-28">

          {/* LEFT */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            data-section="heroLeft"
            className={`relative z-10 transition-all duration-1000 ${revealClass("heroLeft")}`}
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-sky-700 shadow-sm">
              Innovative Digital Solutions
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Grow Your Business with{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-sky-700">
                Webix Infotech
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              We build modern websites, mobile apps and high-impact digital
              experiences that help your brand stand out, perform better and
              grow faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-dark shadow-lg transition hover:-translate-y-1"
              >
                Get Started
              </a>

              <a
                href="/projects"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-600"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT (UPDATED CLEAN GRID) */}
          <div
            ref={(el) => (sectionRefs.current[1] = el)}
            data-section="heroRight"
            className={`relative transition-all duration-1000 ${revealClass("heroRight")}`}
          >
            <div className="relative mx-auto max-w-xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl">

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-xl font-bold">100%</p>
                  <p className="text-xs text-slate-600">Client Focused</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-xs text-slate-600">Support Ready</p>
                </div>
              </div>

              {/* CLEAN GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Card 1 */}
                <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                  <img
                    src={siteImages.heroMain}
                    className="h-36 w-full object-cover group-hover:scale-110 transition duration-500"
                    onError={handleImageError}
                  />
                  <div className="p-3">
                    <p className="text-[10px] tracking-widest text-sky-600">WEB UI</p>
                    <h3 className="text-sm font-semibold">Modern Interface</h3>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                  <img
                    src={siteImages.heroApp}
                    className="h-36 w-full object-cover group-hover:scale-110 transition duration-500"
                    onError={handleImageError}
                  />
                  <div className="p-3">
                    <p className="text-[10px] tracking-widest text-violet-600">APP FLOW</p>
                    <h3 className="text-sm font-semibold">Smooth Experience</h3>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="sm:col-span-2 group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                  <img
                    src={siteImages.heroCase}
                    className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
                    onError={handleImageError}
                  />
                  <div className="p-4">
                    <p className="text-[10px] tracking-widest text-emerald-600">CASE STUDY</p>
                    <h3 className="text-sm font-semibold">
                      Strong visual identity with scalable build quality
                    </h3>
                  </div>
                </div>

              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-semibold">
                WEBIX
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            ref={(el) => (sectionRefs.current[2] = el)}
            data-section="servicesHeader"
            className={`max-w-3xl transition-all duration-1000 ${revealClass("servicesHeader")}`}
          >
            <span className="inline-block text-sm font-extrabold uppercase tracking-[0.25em] text-sky-600">
              Our Services
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Professional Services For Modern Businesses
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              We provide end-to-end digital services with the right balance of
              design, technology and strategy to help your business grow with
              confidence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index + 3] = el)}
                data-section={`service-${index}`}
                className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-3 hover:border-sky-200 hover:shadow-[0_25px_55px_rgba(14,165,233,0.14)] ${revealClass(
                  `service-${index}`
                )}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-2xl text-white shadow-lg shadow-sky-200 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="relative z-10 mt-4 text-base font-medium leading-7 text-slate-700">
                  {service.shortDesc}
                </p>

                <p className="relative z-10 mt-4 text-sm leading-7 text-slate-600">
                  {service.details}
                </p>

                <ul className="relative z-10 mt-6 space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-sky-500" />
                      <span className="text-sm font-medium text-slate-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/services"
                  className="relative z-10 mt-7 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-700 transition duration-300 hover:bg-sky-600 hover:text-white"
                >
                  Learn More
                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            ref={(el) => (sectionRefs.current[9] = el)}
            data-section="projectsHeader"
            className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${revealClass("projectsHeader")}`}
          >
            <span className="inline-block text-sm font-extrabold uppercase tracking-[0.25em] text-sky-600">
              Featured Projects
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
              Our Latest Work
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Explore selected projects crafted with strong UI, clean
              development, and business-focused execution.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index + 10] = el)}
                data-section={`project-${index}`}
                className={`group overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${revealClass(
                  `project-${index}`
                )}`}
              >
                <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={handleImageError}
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {project.description}
                </p>
                <a
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition duration-300 group-hover:gap-3"
                >
                  Read More
                  <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#eef6ff_100%)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div
            ref={(el) => (sectionRefs.current[13] = el)}
            data-section="whyHeader"
            className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${revealClass("whyHeader")}`}
          >
            <span className="inline-block text-sm font-extrabold uppercase tracking-[0.25em] text-sky-600">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
              Why Businesses Trust Webix
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index + 14] = el)}
                data-section={`reason-${index}`}
                className={`rounded-[24px] border border-slate-200 bg-white p-7 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${revealClass(
                  `reason-${index}`
                )}`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-2xl text-white shadow-lg shadow-sky-200">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-white py-20 md:py-24">
        <div
          ref={(el) => (sectionRefs.current[18] = el)}
          data-section="cta"
          className={`mx-auto max-w-7xl px-6 transition-all duration-1000 md:px-10 ${revealClass("cta")}`}
        >
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-sky-800 to-cyan-600 px-8 py-12  shadow-[0_30px_70px_rgba(15,23,42,0.25)] sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                  Want your portfolio or product to look this premium?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-100">
                  We build modern digital products with strong UI, smooth
                  interaction, scalable code, and a professional IT company
                  standard.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1"
                >

                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

