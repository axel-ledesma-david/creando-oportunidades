import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

const NAV_MENU = [
  {
    name: "Quienes somos",
    href: "#quienes",
  },
  {
    name: "Talleres",
    href: "#grupos",
  },
  {
    name: "Convenios",
    href: "#convenios",
  },
  {
    name: "Contactanos",
    href: "#contacto",
  },
];

function NavItem({ children, href, onOpen }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="small"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        onClick={onOpen}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 px-10"
    >
      <div className="container mx-auto flex items-center justify-between">
          <a href="#inicio" className="container flex items-center">
            <Image
              src={"/logo/logo-ac.png"}
              width={50}
              height={50}
              alt="logo-ac"
              className="w-auto h-auto"
            />
            <Typography color="blue-gray" className="text-lg font-bold">
              Creando Oportunidades
            </Typography>
          </a>
      
        <ul className="ml-10 hidden items-center gap-8 lg:flex w-[600px]">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href} onOpen={handleOpen}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
