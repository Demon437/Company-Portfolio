import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import { siteImages } from "../utils/siteImages";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === id);

  const handleImageError = (e) => {
    e.currentTarget.src = siteImages.fallback;
  };

  if (!project) {
    return (
      <section className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[30px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Project not found</h1>
          <p className="mt-4 text-slate-600">
            The project page you are trying to open does not exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  // Hero image ke liye project-specific image
  const heroImage =
    project.detailImage || project.coverImage || project.image || project.gallery?.[0] || siteImages.fallback;

  return (
    <section className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-sky-700"
        >
          ← Back to Projects
        </Link>

        {/* Hero */}
        <div className="relative mt-6 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

          <div className="relative grid gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-14">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                {project.category}
              </span>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {project.year}
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Case Study
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech?.slice(0, 6).map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.liveLink && (
                <>
                  <div className="mt-6">
  <a
    href={project.liveLink}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-sky-400 hover:text-sky-700 hover:shadow-md"
  >
    {/* Subtle Pulse Dot */}
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60 animate-ping"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600"></span>
    </span>

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      Live Preview
    </span>

    <span className="transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </a>
</div>
                  <div className="mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                    >
                      Live Link
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 shadow-sm">
              {project.image?.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  src={project.image}
                  className="h-full min-h-[320px] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full min-h-[320px] w-full object-cover"
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {project.metrics?.map((item, index) => (
            <div
              key={index}
              className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Overview + Highlights */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Project Overview
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Full project description
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.longDescription}
            </p>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Project Outcome
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {project.result}
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Key Highlights
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              What makes this project strong
            </h2>

            <div className="mt-6 space-y-4">
              {project.highlights?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-200 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 rounded-[34px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Core Features
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Detailed feature breakdown
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {project.features?.map((feature, index) => (
              <div
                key={index}
                className="group rounded-[26px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-14">
          <div className="mb-8 max-w-3xl">
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Visual Showcase
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Modern project gallery
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm"
              >
                <img
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  className="h-72 w-full rounded-[22px] object-cover transition duration-700 hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stack + Process */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Technology Stack
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Tools used in this project
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech?.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Workflow
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Delivery process
            </h2>

            <div className="mt-6 space-y-4">
              {project.process?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-[22px] border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-14 overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-sky-900 to-cyan-700 px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.22)] sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(3,105,161,0.82),rgba(8,145,178,0.78))]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Want a project page like this for your business?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100">
                We build modern digital products with strong UI, scalable code,
                and premium case-study style presentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                to="/projects"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;