"use client";

import { Typography } from "@material-tailwind/react";

export function PopularClients() {
  return (
    <section className="px-16 py-8 lg:py-15" id="convenios">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          {/* <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            POPULAR CLIENTS
          </Typography> */}
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Convenios
          </Typography>
        </div>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500"
        >
          tenemos convenio con el gimnasio, GOEL, donde Leandra y guille, hacen
          entrenar a los integrantes del grupo, para hacer frente al síndrome de
          abstinencia, y como estructura de protección. *interactuamos con la
          red bario san Lorenzo, con más de 30 instituciones, en el cual nos
          ayudamos mutuamente, con los recursos humanos y materiales de cada
          institución, ejemplo: centro de salud “padre Gasparoto”, “vecinal san
          Lorenzo”, club san Lorenzo” estación mitre, jardines de infantes,
          escuela técnica, escuela pascual Echague, CAF23, etc. *salimos a hacer
          deporte (futbol) con los muchachos del programa (fotos) *los
          familiares se juntan también para hacer algunos cursos diversos, para
          afianzar el vinculo, como una descarga a tierra dicen ellas
        </Typography>
        {/* <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={480}
              height={480}
              src={`/logos/logo-${logo}.svg`}
              className="w-40 grayscale opacity-75"
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default PopularClients;
