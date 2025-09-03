"use client";
import { Button } from "@material-tailwind/react";
import { IoLogoWhatsapp } from "react-icons/io5";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/+543425276885" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 p-0 shadow-none"
      >
        <IoLogoWhatsapp className="text-green-500" fontSize={"60px"} />
      </Button>
    </a>
  );
}
