function About() {
  const stats = [
    { number: "12+", label: "Projects Delivered" },
    { number: "5+", label: "Happy Clients" },
    { number: "1+", label: "Years of Experience" },
    { number: "10+", label: "Tech Experts" },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We create modern and scalable digital solutions using the latest technologies and industry best practices.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <path
            d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centric Approach",
      description:
        "Every product is designed around business goals, user expectations, and long-term growth opportunities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <path
            d="M16 19C16 16.7909 14.2091 15 12 15C9.79086 15 8 16.7909 8 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 20H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Quality & Performance",
      description:
        "From code structure to UI polish, we focus on performance, security, maintainability, and high-quality delivery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <path
            d="M12 3L19 7V12C19 16.4183 16.3137 20.4183 12 22C7.68629 20.4183 5 16.4183 5 12V7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5L11.2 14.2L14.8 10.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Transparent Collaboration",
      description:
        "We believe in smooth communication, clear timelines, agile execution, and complete project transparency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <path
            d="M8 10H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 14H13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 4H17C19.2091 4 21 5.79086 21 8V13C21 15.2091 19.2091 17 17 17H13L9 20V17H7C4.79086 17 3 15.2091 3 13V8C3 5.79086 4.79086 4 7 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const services = [
    "Custom Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Cloud & Deployment",
    "Maintenance & Support",
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      description:
        "We understand your business, audience, and goals to define the right digital strategy.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our team crafts intuitive, clean, and conversion-focused user experiences with modern design principles.",
    },
    {
      step: "03",
      title: "Develop",
      description:
        "We build secure, scalable, and high-performance applications using reliable technologies.",
    },
    {
      step: "04",
      title: "Deliver",
      description:
        "After testing and optimization, we launch the solution and continue with support and improvements.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.15),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_25%)]" />
            <div className="relative grid items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
              <div>
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  About Webix Infotech
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Building smart, scalable, and future-ready digital solutions.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  We are a modern IT company focused on delivering high-quality
                  software solutions that help businesses grow in the digital
                  era. From idea validation and UI/UX design to full-scale
                  development and deployment, Webix transforms concepts into
                  impactful digital products.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Our team combines creativity, technology, and strategic
                  thinking to build websites, web applications, mobile apps, and
                  enterprise solutions that are reliable, visually impressive,
                  and performance-driven.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                  >
                    Let’s Work Together
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-sky-300 hover:text-sky-700"
                  >
                    Explore Services
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                        <path
                          d="M4 7H20"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 4V10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17 4V10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Business-Focused Strategy
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      We don’t just build software — we create solutions aligned
                      with your business vision, goals, and growth plans.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:mt-10">
                    <div className="mb-4 inline-flex rounded-2xl bg-indigo-100 p-3 text-indigo-700">
                      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="16"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Clean & Scalable Code
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Our development approach ensures scalability, security,
                      maintainability, and smooth long-term performance.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M8 12L10.5 14.5L16 9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Trusted Delivery
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      We focus on timely execution, transparent communication,
                      and measurable outcomes throughout the project lifecycle.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:mt-10">
                    <div className="mb-4 inline-flex rounded-2xl bg-violet-100 p-3 text-violet-700">
                      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Long-Term Support
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Beyond launch, we continue helping businesses optimize,
                      scale, and improve their digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-3xl font-bold text-sky-600">{item.number}</h3>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Company Story */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Who We Are
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                A technology partner committed to digital excellence.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                At Webix, we help startups, brands, and enterprises build strong
                digital foundations through innovative design and reliable
                engineering. Our work is driven by a passion for solving real
                business problems with smart and efficient technology.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether it is developing an engaging business website, a custom
                dashboard, an e-commerce platform, or a scalable SaaS product,
                our goal remains the same — to deliver solutions that create
                value, improve user experience, and support long-term growth.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-white p-8 shadow-sm">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                What We Do
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                End-to-end IT services for modern businesses.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We provide a complete range of digital services that cover every
                major aspect of product development and business transformation.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      ✓
                    </span>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Our Core Values
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Principles that define how we work.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our company culture is built around innovation, trust, quality,
                and collaboration. These values shape every interaction, every
                design decision, and every line of code we deliver.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="inline-flex rounded-2xl bg-white p-3 text-sky-700 shadow-sm transition duration-300 group-hover:bg-sky-50">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-12 rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Our Process
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A streamlined approach from idea to execution.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We follow a smart and collaborative workflow to ensure every
                project is delivered with clarity, speed, and precision.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-sm font-bold tracking-widest text-sky-600">
                    {item.step}
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

          {/* CTA Section */}
          <div className="mt-12 overflow-hidden rounded-[32px] bg-sky-600 shadow-[0_20px_60px_rgba(2,132,199,0.25)]">
            <div className="grid items-center gap-8 px-8 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let’s build something exceptional together.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-sky-100">
                  Looking for a reliable IT partner to transform your idea into
                  a powerful digital product? Our team is ready to help you
                  create secure, scalable, and beautifully designed solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Contact Us
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;