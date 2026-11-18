import { StarCluster, axesRightStars, miniStars } from "@/components/Stars";

const axes = [
  { name: "Voces", description: "Testimonios, experiencias y reflexiones en primera persona." },
  {
    name: "Literatura",
    description: "Creación/análisis de obras narrativas: cuento, relato, poesía, crónica, ensayo breve.",
  },
  { name: "Ciencia", description: "Divulgación y reflexión sobre temas científicos y tecnológicos." },
  {
    name: "Política",
    description:
      "Reflexiones sobre el poder y la participación de las mujeres en la política así como análisis crítico de fenómenos sociales y culturales.",
  },
  { name: "Gastronomía", description: "Recetas familiares, tradiciones, memoria e identidad a través de la comida." },
  {
    name: "Cultura Pop",
    description:
      "Análisis de medios de comunicación, redes sociales, música, moda y otros fenómenos de la cultura contemporánea.",
  },
];

export default function AxesSection() {
  return (
    <section id="ejes" className="relative px-4 py-24 sm:px-8 lg:py-32">
      <StarCluster stars={miniStars} className="right-2 bottom-4 aspect-square w-16 sm:hidden" />
      <StarCluster
        stars={axesRightStars}
        className="top-1/2 right-0 hidden aspect-[2/5] w-24 sm:block md:w-32 lg:w-[12.5rem]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-5xl font-bold tracking-[-0.06em] text-vino sm:text-6xl">
          Ejes temáticos
        </h2>

        <dl className="mt-16 grid gap-y-10 sm:mt-24 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] sm:gap-x-12 sm:gap-y-16 lg:gap-y-20">
          {axes.map((a) => (
            <div key={a.name} className="contents">
              <dt className="self-center text-3xl font-bold italic tracking-[0.02em] text-vino sm:text-center sm:text-4xl">
                {a.name}
              </dt>
              <dd className="-mt-8 self-center text-2xl leading-tight text-neutral-900 sm:mt-0 sm:text-3xl lg:text-4xl">
                {a.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
