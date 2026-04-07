import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-4 md:mx-8 flex max-w-7xl justify-between px-4 md:px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight text-sky-600 transition hover:text-sky-700">
          Webix Infotech
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-wrap items-center gap-4">
            <Link to="/" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Services
            </Link>
            <Link to="/projects" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Projects
            </Link>
            <Link to="/contact" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400 md:hidden"
          >
            <div className="flex h-4 w-4 flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-4 md:mx-8 border-t border-slate-200 bg-white/95 px-4 md:px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              About
            </Link>
            <Link to="/services" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Services
            </Link>
            <Link to="/projects" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Projects
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;