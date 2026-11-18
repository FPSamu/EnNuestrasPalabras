import Image from "next/image";
import { StarCluster, manifestoLeftStars, miniStars } from "@/components/Stars";

export default function ManifestoSection() {
  return (
    <section id="manifiesto" className="relative scroll-mt-28 px-4 py-24 sm:px-8 lg:py-32">
      <StarCluster stars={miniStars} className="top-6 left-2 aspect-square w-14 sm:hidden" />
      <StarCluster
        stars={manifestoLeftStars}
        className="top-[46%] left-[1.8%] hidden aspect-[2/5] w-20 sm:block md:w-28 lg:w-[10.5rem]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-5xl font-bold tracking-[-0.06em] text-vino sm:text-6xl">Manifiesto</h2>

        {/* Portada del manifiesto: abre el PDF en una pestaña nueva */}
        <a
          href="/manifiesto.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir el manifiesto (PDF) en una pestaña nueva"
          className="group mx-auto mt-16 flex aspect-[1/1.414] w-full max-w-md flex-col items-center border border-neutral-900 bg-white px-8 pt-[14%] pb-[8%] shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vino sm:mt-24 lg:max-w-lg"
        >
          <Image
            src="/ilustracion.png"
            alt=""
            width={1113}
            height={1200}
            sizes="(min-width: 1024px) 18rem, 60vw"
            className="h-auto w-[58%]"
          />
          <Image
            src="/logo.png"
            alt="En nuestras palabras · Revista cultural"
            width={1000}
            height={223}
            sizes="(min-width: 1024px) 24rem, 75vw"
            className="mt-2 h-auto w-[78%]"
          />

          <p className="mt-auto text-xl font-bold tracking-wide text-neutral-900 sm:text-2xl">MANIFIESTO</p>
        </a>
      </div>
    </section>
  );
}
