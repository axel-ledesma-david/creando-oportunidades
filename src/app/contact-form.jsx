"use client";

import {Typography} from "@material-tailwind/react";

export function ContactForm() {
  return (
    <section className="px-10 py-16" id="contacto">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contacto y redes
        </Typography>
       {/*  <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography> */}
      </div>
      <div className="flex items-center justify-center flex-col gap-7 sm:justify-evenly sm:flex-row sm:gap-4 p-4">
        <div className="flex items-center flex-col gap-5">
            <p> WhatsApp: +54 342 527-6885</p>
            <p>Email: accreandoportunidades@gmail.com</p>
            <p>Instagram: @accreando</p>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1487572371293!2d-60.7301499!3d-31.657149699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a856d5880391%3A0xceebfd048e8be9f5!2sJuan%20D%C3%ADaz%20de%20Sol%C3%ADs%201260%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1756860548262!5m2!1ses-419!2sar" className="border-0" width="400" height="360" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
