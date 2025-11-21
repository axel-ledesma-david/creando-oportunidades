"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: '/image/counselinEdited.jpeg',
    title: "Gladis Simionatto", 
    children: "Técnico Superior en Orientación del Desarrollo Personal - Counseling",
  },
  {
    icon: "/image/trabajoSocial.jpeg",
    title: "Guillermina Cerati",
    children: "Lic. en Trabajo Social",
  },
  {
    icon: "/image/psicomotricidad.jpeg",
    title: "Florencia Previale",
    children:
      "Lic. en Psicomotricidad",
    }];

export function Skills() {

  return (
    <section className="p-10 bg-[#F9FAFB] shadow-md" id="quienes">
      <div className="container mx-auto mb-20 px-0 sm:px-6 text-center">
        <Typography variant="h1" className="mb-4">
          Quienes somos? 
        </Typography>
        <Typography
          variant="lead"
          className="md:mx-auto w-[100%] text-gray-600 lg:w-10/12 sm:w-[60%]"
        >
          Somos una organización sin fines de lucro, interesados en el bienestar de personas menos favorecidas, que por distintas cuestiones quedaron vulnerables algunos atrapados por las adicciones, por lo cual trabajamos arduamente para proveer lo que necesiten en materia humana, y asi poder hacer frente a sus situaciones, para ello, los capacitamos, con cursos de formación en oficios como instaladores electricistas, panaderos, peluquería, herrería etc. también en términos espirituales les invitamos a participar de reuniones de jóvenes, adolescentes, niños, adultos, los que tienen problemas de adicciones, a través de entrevistas programadas, le damos entrada al sistema de recuperación ambulatoria en adicciones y codependencia, teniendo el apoyo a través de convenios con APRECOD (agencia de prevención de adicciones) y el plan NUEVA OPORTUNIDAD de desarrollo social
        </Typography>
        <Typography color="blue-gray" className="font-bold uppercase mt-5">
          Equipo interdisciplinario:
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
