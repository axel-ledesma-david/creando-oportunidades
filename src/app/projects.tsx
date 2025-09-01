"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/noAlaPrimera.jpeg",
    title: "No a la prirmera",
    desc: "Es en este grupo donde nos fortalecemos, aprendemos sobre lo que nos pasa, física, psíquica, espiritual, familiar y socialmente; con seis meses: remisión parcial y 12 meses: remisión total.",
  },
  {
    img: "/image/noEstoySolo.jpeg",
    title: "No estoy solo",
    desc: "En este grupo apoyamos y fortalecemos a los familiares a sobrellevar las crisis de convivir con un adicto, desde el conocimiento sobre adicciones y codependencia y coadicción, intercambiamos herramientas desde las experiencias vividas, siendo un trabajo artesanal en cada caso. Porque decimos siempre ”cada caso un mundo”.",
  },
  {
    img: "/image/tallerElectricidad.jpeg",
    title: "Taller de Electricidad",
    desc: "",
  },
  {
    img: "/image/tallerEstetica.jpeg",
    title: "Taller de Estética",
    desc: "",
  },
  {
    img: "/image/tallerPanaderia.jpeg",
    title: "Taller de Panadería",
    desc: "",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="grupos">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Grupos, talleres y cursos
        </Typography>
       {/*  <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
