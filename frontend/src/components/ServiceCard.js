import React from "react";
import services from "../data/servicesData";

function ServiceCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.id}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-600 text-lg">
            {service.icon || "💡"}
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">{service.description}</p>
        </article>
      ))}
    </div>
  );
}

export default ServiceCard;