import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  // Respaldo solo para equipos sin Times New Roman (Android/Linux)
  preload: false,
});

export const metadata: Metadata = {
  title: "En nuestras palabras · Revista cultural",
  description: "Cuenta regresiva para el lanzamiento de En nuestras palabras, revista cultural.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${tinos.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
