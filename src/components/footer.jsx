import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const links = [
  { name: "Quienes", href: "#quienes" },
  { name: "Grupos", href: "#grupos" },
  { name: "Convenios", href: "#convenios" },
  { name: "Contacto", href: "#contacto" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-20 bg-[#111827]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 justify-center">
            <Typography className="text-white" variant="small">
              Juan Díaz de Solis 1260
            </Typography>
            <Typography className="text-white" variant="small">
              Santa Fe, Capital, Argentina
            </Typography>
            <Typography className="text-white" variant="small">
              WhatsApp: +54 342 527-6885
            </Typography>
            <Typography className="text-white" variant="small">
              Email: accreandoportunidades@gmail.com
            </Typography>
            <Typography className="text-white" variant="small">
              Instagram: @ac.creandooportunidades
            </Typography>
              
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1487572371293!2d-60.7301499!3d-31.657149699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a856d5880391%3A0xceebfd048e8be9f5!2sJuan%20D%C3%ADaz%20de%20Sol%C3%ADs%201260%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1756860548262!5m2!1ses-419!2sar" className="border-0" width="250" height="260" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <Image src={"/logo/logo-ac.png"} width={200} height={200} alt="logo" />
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal text-white">
            &copy; {CURRENT_YEAR} Asociación Civil Con Personería Jurídica
            Creando Oportunidades
          </Typography>
          <ul className="flex gap-8 items-center md:flex-row flex-col">
            {links.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal text-white hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
            <Button color="gray">subscribe</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
