"use client";

/* import { ProjectCard } from "@/components"; */
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const talleres = [
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
    desc: "Este curso enseña los fundamentos de la electricidad y la instalación de sistemas eléctricos domiciliarios. Se aprende sobre circuitos, cableado, tableros, interruptores, llaves térmicas, disyuntores, conexión de tomas y luminarias, interpretación de planos eléctricos, normas de seguridad eléctrica, herramientas básicas y diagnóstico de fallas. El objetivo es que el alumno pueda realizar instalaciones seguras, mantenimientos y pequeñas reparaciones.",
  },
  {
    img: "/image/tallerEstetica.jpeg",
    title: "Taller de Estética Femenina",
    desc: "Este curso ofrece una formación integral en técnicas esenciales de estética y belleza. Incluye la realización de trenzas africanas, colocación y mantenimiento de pestañas (permanentes y extensiones) y diseño de cejas. También aborda el cuidado y embellecimiento de uñas (manicuría, esmaltado, nail art), principios de maquillaje profesional y técnicas básicas de peluquería, como peinados, brushing y trabajos simples de estilismo. El objetivo es que el participante adquiera habilidades prácticas para brindar servicios completos de estética femenina.",
  },
  {
    img: "/image/tallerPanaderia.jpeg",
    title: "Taller de Panadería",
    desc: "En este curso se aprenden las técnicas básicas y avanzadas para elaborar distintos tipos de panes. Incluye conocimientos sobre amasado, fermentación, horneado, manejo de levaduras, uso de distintos tipos de harinas, elaboración de panes clásicos (francés, lactal, salvado), panes especiales (integrales, saborizados, artesanales), y buenas prácticas de higiene y manipulación de alimentos.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8 shadow-2xl z-10" id="grupos">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Grupos, talleres y cursos
        </Typography>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24 justify-center ">
      {talleres.map((taller, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Imagen */}
          <div className="md:w-1/2">
            <Image
              src={taller.img}
              alt={taller.title}
              width={400}
              height={200}
              className="rounded-2xl object-cover h-80 shadow-lg w-full"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {taller.title}
            </h2>
            <p className="text-gray-600 text-lg">{taller.desc}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Projects;
