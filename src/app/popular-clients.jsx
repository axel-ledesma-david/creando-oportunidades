"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export function PopularClients() {

  const CLIENTS = [
    {name: "aprecod", ext: "jpeg"},
    {name: "centroSalud", ext: "png"},
    {name: "gymGoel-removebg-preview", ext: "png"},
    {name: "minIgualdad", ext: "jpeg"},
    /* {name: "vecinalSanlo", ext: "jpeg"} */
  ]


  return (
    <section className="px-16 py-8 lg:py-15 bg-[#F3F4F6] shadow-md" id="convenios">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Convenios
          </Typography>
        </div>
        {<Typography
          variant="lead"
          className="mx-auto w-full text-gray-600 text-xl text-center"
        >
           Tenemos convenio con:
        </Typography>}
        <div className="flex flex-wrap items-center justify-center gap-11 mt-12">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo.name}
              width={480}
              height={480}
              src={`/logos/${logo.name}.${logo.ext}`}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
