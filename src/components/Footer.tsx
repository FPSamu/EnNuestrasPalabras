const EMAIL = "ennuestraspalabrasrevista@gmail.com";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-rosa px-4 py-20 text-center font-bold text-white sm:px-8 lg:py-28">
      <a
        href={`mailto:${EMAIL}`}
        className="break-all text-xl underline-offset-4 hover:underline sm:text-2xl"
      >
        {EMAIL}
      </a>
      <p className="mt-16 text-lg sm:text-2xl">
        © 2026 En nuestras palabras • Revista Cultural. Todos los derechos reservados.
      </p>
    </footer>
  );
}
