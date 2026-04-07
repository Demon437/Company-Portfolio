import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e293b] via-[#2f6f8f] to-[#3ba4b5] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold">
              Webix Infotech
            </h2>

            <p className="mt-4 text-base text-white/80 leading-7">
              Enterprise-grade web and mobile products built for growth,
              performance, and secure delivery.
            </p>

            <div className="mt-6 space-y-3 text-base text-white/80">
              <p><span className="font-semibold text-white">Email:</span> officialwebixinfotech@gmail.com</p>
              <p><span className="font-semibold text-white">Phone:</span>+91 9926820304</p>
              <p><span className="font-semibold text-white">Address:</span>Sukhliya, Indore, Aditya Gateway, Madhya Pradesh 452010</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase text-white/90">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-base">
              {["Web Development", "UI/UX Design", "Mobile Apps", "Cloud Integration"].map((item, i) => (
                <li key={i}>
                  <span className="cursor-pointer text-white/80 hover:text-white transition hover:translate-x-1 inline-block">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase text-white/90">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-base">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase text-white/90">
              Follow Us
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {["LinkedIn", "Twitter"].map((item, i) => (
                <button
                  key={i}
                  className="px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm text-white hover:bg-white hover:text-dark transition duration-300 shadow-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 text-base text-white/70">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Webix Infotech. All rights reserved.</p>
            <p>Designed for modern IT brands and digital product teams.</p>
          </div>
        </div>

      </div>

      {/* Hover Style */}
      <style jsx>{`
        .footer-link {
          color: rgba(255,255,255,0.8);
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: white;
          transform: translateX(5px);
        }
      `}</style>

    </footer>
  );
}

export default Footer;