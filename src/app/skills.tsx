"use client";

import { Typography } from "@material-tailwind/react";
/* import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid"; */
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
    
    /* ,
  
  {
    icon: "",
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: "",
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: "",
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  }, */

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Quienes somos?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Somos una organización sin fines de lucro, interesados en el bienestar de personas menos favorecidas, que por distintas cuestiones quedaron vulnerables algunos atrapados por las adicciones, por lo cual trabajamos arduamente para proveer lo que necesiten en materia humana, y asi poder hacer frente a sus situaciones, para ello, los capacitamos, con cursos de formación en oficios como instaladores electricistas, panaderos, peluquería, herrería etc. también en términos espirituales les invitamos a participar de reuniones de jóvenes, adolescentes, niños, adultos, los que tienen problemas de adicciones, a través de entrevistas programadas, le damos entrada al sistema de recuperación ambulatoria en adicciones y codependencia, teniendo el apoyo a través de convenios con APRECOD (agencia de prevención de adicciones) y el plan NUEVA OPORTUNIDAD de desarrollo social
        </Typography>
        <Typography color="gray" className="mb-2 mt-4 font-bold uppercase">
          Con qué contamos para el apoyo de recuperación ambulatorias?
        </Typography>
        <Typography color="blue-gray" className="font-bold uppercase">
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
