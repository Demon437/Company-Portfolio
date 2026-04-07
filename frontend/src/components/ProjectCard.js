import React from "react";
import projects from "../data/projectsData";

function ProjectCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-sky-600">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">{project.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ProjectCard;