import React from "react";

function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      short:
        "High-performance websites and web applications built for speed, scalability, and user engagement.",
      points: [
        "Custom business websites",
        "Responsive frontend development",
        "React / modern JS architecture",
        "Admin panels & dashboards",
      ],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      short:
        "User-first interfaces that blend visual appeal with usability, consistency, and conversion-focused design.",
      points: [
        "Wireframing & prototyping",
        "Modern interface design",
        "User journey optimization",
        "Design systems & consistency",
      ],
    },
    {
      title: "App Development",
      icon: "📱",
      short:
        "Robust mobile applications designed to deliver seamless cross-platform experiences for growing brands.",
      points: [
        "Android & iOS solutions",
        "Cross-platform app development",
        "API integration",
        "Performance-focused architecture",
      ],
    },
    {
      title: "SEO Optimization",
      icon: "🔍",
      short:
        "Search-friendly digital experiences that improve online visibility, rankings, and quality traffic growth.",
      points: [
        "Technical SEO improvements",
        "Site speed optimization",
        "On-page SEO structure",
        "Content visibility support",
      ],
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      short:
        "Reliable cloud deployment and infrastructure support for secure, scalable, and future-ready applications.",
      points: [
        "Cloud deployment",
        "Hosting & server setup",
        "Scalable infrastructure",
        "Maintenance & monitoring",
      ],
    },
    {
      title: "Maintenance & Support",
      icon: "🛠️",
      short:
        "Ongoing technical support to keep your website or application secure, updated, and running smoothly.",
      points: [
        "Bug fixing & monitoring",
        "Version upgrades",
        "Security improvements",
        "Long-term technical assistance",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "We begin by understanding your business goals, audience, and project scope to define the right technical direction.",
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description:
        "Our team creates a clear roadmap covering design, development, timelines, user flow, and delivery expectations.",
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "We build visually polished and technically scalable products using modern technologies and best practices.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "After testing and optimization, we deploy your solution and continue with support, monitoring, and improvements.",
    },
  ];

  const benefits = [
    "Modern and scalable solutions",
    "Clean and user-focused interfaces",
    "Business-oriented development approach",
    "Transparent communication",
    "Performance and security focused",
    "Long-term support and maintenance",
  ];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_30%)]" />

            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
              <div>
                <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  Our Services
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Professional IT services built for modern businesses.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  We help startups, brands, and enterprises transform ideas into
                  powerful digital products through strategic design, scalable
                  development, and future-ready technology solutions.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  From custom websites and mobile apps to cloud deployment and
                  support, our services are designed to improve user experience,
                  accelerate growth, and strengthen your digital presence.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-sky-700"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-sky-300 hover:text-sky-700"
                  >
                    View Our Work
                  </a>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                    🚀
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Growth Driven
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Every service is aligned with business growth, user needs,
                    and long-term digital success.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:mt-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                    ⚙️
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Scalable Tech
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    We build solutions with clean code, flexibility, and strong
                    performance in mind.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                    ✨
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Modern Experience
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A polished interface and smooth digital experience help your
                    brand stand out professionally.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:mt-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                    🤝
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Reliable Support
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    We stay connected beyond launch with technical guidance,
                    maintenance, and improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-14">
            <div className="mb-8 max-w-3xl">
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                What We Offer
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Tailored digital services for every stage of your growth.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our service offerings combine strategy, design, development, and
                support to help businesses create high-impact digital solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-sky-50 transition duration-300 group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-3xl shadow-sm transition duration-300 group-hover:bg-sky-600 group-hover:text-white">
                      {service.icon}
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.short}
                    </p>

                    <div className="mt-6 space-y-3">
                      {service.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className="mt-7 inline-flex items-center text-sm font-semibold text-sky-700 transition duration-300 hover:gap-3"
                    >
                      Discuss this service
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                We deliver solutions that are practical, modern, and scalable.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Our team focuses on combining modern design standards with
                reliable development practices, ensuring every project is not
                only visually strong but also technically robust.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 transition duration-300 hover:border-sky-200 hover:bg-sky-50"
                  >
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-white p-8 shadow-sm sm:p-10">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                Service Commitment
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                More than delivery — we focus on long-term value.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                A strong IT company does not just complete tasks. It understands
                business challenges, improves digital experiences, and supports
                brands with dependable technology partnerships.
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Business Understanding
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We align our services with your objectives so the final
                    product serves both users and business goals effectively.
                  </p>
                </div>

                <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Quality Execution
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    From UI polish to development standards, we ensure each
                    service reflects professionalism and technical quality.
                  </p>
                </div>

                <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Continuous Improvement
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We help businesses evolve by optimizing, maintaining, and
                    improving products after launch as well.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Our Workflow
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A structured process that keeps every project on track.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We follow a streamlined workflow that turns ideas into polished
                digital products with clarity, speed, and quality.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-lg"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-sky-600">
                    {item.number}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 overflow-hidden rounded-[32px] bg-sky-600 shadow-[0_20px_60px_rgba(2,132,199,0.25)]">
            <div className="grid items-center gap-8 px-8 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need a reliable IT partner for your next digital product?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-sky-100">
                  Let’s build a solution that looks professional, performs
                  smoothly, and supports your business growth with the right
                  technology stack.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;