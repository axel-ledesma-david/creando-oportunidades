/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
/* import type { Metadata } from "next"; */
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Creando Oportunidades",
  description:
    "Asociación Civil dedicada a personas que luchan contra las adicciones",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/logo/logo-ac.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
            {children}
            <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
