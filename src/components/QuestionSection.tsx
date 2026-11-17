export default function QuestionSection() {
  return (
    <section id="pregunta" className="relative px-4 py-32 sm:px-8 lg:py-48">
      {/* Manchas de degradado rosa: arriba a la derecha y abajo a la izquierda */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-80 -right-48 size-[44rem] rounded-full bg-[radial-gradient(circle,rgba(240,180,205,0.4)_0%,rgba(255,255,255,0)_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-48 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(240,180,205,0.45)_0%,rgba(255,255,255,0)_70%)]"
      />

      <div className="relative mx-auto max-w-4xl text-center text-neutral-900">
        <h2 className="text-5xl font-bold tracking-[-0.06em] text-vino sm:text-6xl">Pregunta central</h2>

        <p className="mt-6 text-2xl italic leading-snug tracking-[-0.06em] sm:text-4xl">
          ¿Cómo se construye, representa y expresa la identidad de las mujeres latinoamericanas a través de
          las palabras y las historias?
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-2xl leading-snug tracking-[-0.06em] sm:text-4xl">
          La revista parte del reconocimiento de que no existe una única experiencia de ser mujer en América
          Latina y el Caribe, por lo que busca reunir perspectivas diversas y evitar representaciones
          generalizadas.
        </p>
      </div>
    </section>
  );
}
