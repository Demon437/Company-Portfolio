import React from "react";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import { siteImages } from "../utils/siteImages";
import project4 from "../assets/images/projects/home.png";


function Projects() {
  const stats = [
    { value: "12+", label: "Projects Completed" },
    { value: "5+", label: "Clients Served" },
    { value: "Full Stack", label: "Frontend + Backend Delivery" },
    { value: "Modern UI", label: "Scalable Product Experience" },
  ];

  const handleImageError = (e) => {
    e.currentTarget.src = siteImages.fallback;
  };

  return (
    <section className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-cyan-100 blur-3xl opacity-80" />

          <div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Our Featured Work
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Explore our modern projects with premium design and strong
              business value.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Every project card now opens a dedicated detail page with full
              overview, feature breakdown, technology stack, and outcome.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
            >
              <h3 className="text-3xl font-bold text-slate-900 transition duration-300 group-hover:text-sky-700">
                {item.value}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured project */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <img
              src={projectData[0].banner}
              alt={projectData[0].title}
              className="absolute inset-0 h-full w-full object-cover opacity-10"
              onError={handleImageError}
            />

            <div className="relative z-10 p-8 sm:p-10">
              <span className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">
                Featured Case Study
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {projectData[0].title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                {projectData[0].description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {projectData[0].metrics.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to={`/projects/${projectData[0].id}`}
                className="mt-8 inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700"
              >
                View Full Case Study
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-slate-100">
              <img
                src={project4}
                alt={projectData[0].title}
                className="h-[420px] w-full object-full transition-transform duration-700 hover:scale-105"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Selected Projects
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Click any project to view full case study.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Each card opens a dedicated project page with complete details and
            modern presentation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {projectData.map((project, index) => {
            const isOngoing = index >= projectData.length - 3;

            const CardWrapper = isOngoing ? "div" : Link;

            return (
              <CardWrapper
                key={project.id}
                {...(!isOngoing && { to: `/projects/${project.id}` })}
                className={`group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 
        ${!isOngoing && "hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"}
        ${isOngoing && "cursor-not-allowed opacity-80"}
        `}
              >
                {/* Ongoing Badge */}
                {isOngoing && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    Ongoing
                  </span>
                )}

                <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-sky-50 transition duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100">
                    {project.image?.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video
                        src={project.image}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={handleImageError}
                      />
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {!isOngoing && (
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-sky-700">
                      View full project →
                    </div>
                  )}

                  {isOngoing && (
                    <div className="mt-6 text-sm font-semibold text-orange-500">
                      Work in progress
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;