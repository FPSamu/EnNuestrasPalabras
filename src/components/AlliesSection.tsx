import Image from "next/image";

// Los logos se muestran en escala de grises, como en el diseño.
// "className" controla el tamaño de cada logo para que se vean equilibrados entre sí.
const allies = [
  {
    name: "Tiburón Cultural · Revista",
    src: "/aliados/tiburon-cultural.png",
    width: 412,
    height: 222,
    className: "w-48 lg:w-60",
  },
  {
    name: "Estación Adelita",
    src: "/aliados/estacion-adelita.png",
    width: 800,
    height: 599,
    className: "w-40 lg:w-48",
  },
  {
    name: "Cuerpos Parlantes",
    src: "/aliados/cuerpos-parlantes.png",
    width: 733,
    height: 600,
    className: "w-36 lg:w-44",
  },
  {
    name: "ITESO, Universidad Jesuita de Guadalajara · Gestión Cultural",
    src: "/aliados/iteso-gestion-cultural.png",
    width: 800,
    height: 231,
    className: "w-72 lg:w-[26rem]",
  },
];

export default function AlliesSection() {
  return (
    <section id="aliados" className="relative scroll-mt-28 px-4 py-24 sm:px-8 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-bold tracking-[-0.06em] text-vino sm:text-6xl">
          Nuestros aliados
        </h2>

        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:mt-28 lg:mt-40 lg:gap-x-16">
          {allies.map((a) => (
            <li key={a.name}>
              <Image
                src={a.src}
                alt={a.name}
                width={a.width}
                height={a.height}
                sizes="(min-width: 1024px) 26rem, 18rem"
                className={`h-auto grayscale ${a.className}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
