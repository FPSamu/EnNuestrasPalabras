import Image from "next/image";

export default function ProjectSection() {
  return (
    <section id="proyecto" className="relative scroll-mt-28 px-4 pb-24 sm:px-8 lg:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/ilustracion.png"
            alt="Ilustración del mapa de Latinoamérica formado por rostros de mujeres diversas"
            width={1113}
            height={1200}
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="mx-auto h-auto w-full max-w-lg"
          />

          <div className="mx-auto max-w-xl text-neutral-900">
            <h2 className="text-center text-5xl font-bold tracking-[-0.05em] text-vino sm:text-6xl">
              Sobre el proyecto
            </h2>

            <p className="mt-10 text-center text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
              <em>En nuestras palabras</em> es una revista cultural nacida en Guadalajara, Jalisco, México.
              Busca reunir distintas voces, perspectivas y formas de expresión para explorar cómo se
              construyen y se representan las identidades de las mujeres latinoamericanas.
            </p>

            <p className="mt-10 text-center text-2xl sm:text-justify leading-tight tracking-[-0.03em] sm:text-3xl">
              Palabras clave: Lenguaje, reflexión, comunidad, mujeres, diversidad, experiencias, política,
              arte, expresión, alternativo, literatura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
