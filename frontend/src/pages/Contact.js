import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/contact`,
      formData
    );

    alert("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  }
};

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let’s build your next digital product with confidence
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Tell us about your idea, business goals, or project requirements.
            Our team will connect with you to discuss the right solution,
            timeline, and execution plan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side */}
          <div className="space-y-6">
            <div className="rounded-[28px] bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">
                Start a conversation with our team
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether you need a website, custom software, mobile app, UI/UX
                design, or long-term development support, we’re here to help
                you plan, design, and launch effectively.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl">⏱️</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    Quick Response
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Usually within 24 hours
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl">🤝</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    Consultation Support
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Strategy, planning, and execution guidance
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-white p-6 shadow-md ring-1 ring-slate-200">
                <div className="text-3xl">📧</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Email Us
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  For project discussions and business inquiries
                </p>
                <p className="mt-3 text-sm font-medium text-slate-900">
                 officialwebixinfotech@gmail.com
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-6 shadow-md ring-1 ring-slate-200">
                <div className="text-3xl">📞</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Call Us
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Talk directly with our business team
                </p>
                <p className="mt-3 text-sm font-medium text-slate-900">
                  +91 9926820304
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-6 shadow-md ring-1 ring-slate-200">
                <div className="text-3xl">📍</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Office
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Visit us or schedule a meeting
                </p>
                <p className="mt-3 text-sm font-medium text-slate-900">
                  Sukhliya, Indore, Aditya Gateway, Madhya Pradesh 452010
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-6 shadow-md ring-1 ring-slate-200">
                <div className="text-3xl">🌍</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Global Services
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Serving startups, SMBs, and enterprises
                </p>
                <p className="mt-3 text-sm font-medium text-slate-900">
                  Remote collaboration worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="rounded-[30px] bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              Tell us about your project
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Fill out the form below and share as much detail as possible. This
              helps us understand your requirements better.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="Dedicated Team">Dedicated Team</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="Less than $1,000">Less than $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, features, timeline, and requirements..."
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              <p className="text-sm text-slate-700">
                We usually reply within 24 hours on business days.
              </p>

              <button
                type="submit"
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "16px",
                  padding: "16px 24px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  background: "linear-gradient(90deg, #06b6d4 0%, #2563eb 50%, #4f46e5 100%)",
                  boxShadow: "0 12px 30px rgba(37, 99, 235, 0.25)",
                }}
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;