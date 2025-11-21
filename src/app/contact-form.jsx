"use client";

import { useFormik } from "formik";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validationSchema } from "./Schema";
import Swal from "sweetalert2";

export function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState();

  const { handleSubmit, handleChange, touched, errors, handleBlur, values, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: () => {
      emailjs
        .sendForm("service_w0b072q", "template_ouqpkte", form.current, {
          publicKey: "be_n7nDANVnaypDzG",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire({
              title: 'Mensaje enviado con éxito!!!',
              icon: 'success'
            })
            setSent(true);
            resetForm();
            setTimeout(() => setSent(false), 4000);
          },
          (error) => {
            Swal.fire({
              title: 'Hubo un problema!!!',
              icon: 'error'
            })
            console.log("FAILED...", error);
          }
        );
    },
  });

  return (
    <section
      className="px-15 py-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0)),url('/image/bg-contact.jpeg')] bg-no-repeat bg-cover bg-center "
      id="contacto"
    >
      <div className="flex items-center justify-center flex-col gap-7 sm:justify-evenly sm:flex-row sm:gap-4 p-10 w-[full]">
        <div className="isolate px-4 py-20 sm:py-32 lg:px-8 bg-blue-gray-200 w-[60%] rounded-md">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-800 sm:text-5xl">
              Contactanos
            </h2>
            <p className="text-gray-700">
              Hacenos tu consulta y respondemos a la brevedad
            </p>
          </div>
          <form
            action="#"
            method="POST"
            ref={form}
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {touched.firstName && errors.firstName && (
                    <span style={{ color: "red" }}>{errors.firstName}</span>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Apellido
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {touched.lastName && errors.lastName && (
                    <span style={{ color: "red" }}>{errors.lastNameName}</span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  {touched.email && errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2"></div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    value={values.message}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                  {touched.message && errors.message && (
                    <span style={{ color: "red" }}>{errors.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default ContactForm;
