import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import PixelHand from "@/components/PixelHand";
import ProjectSection from "@/components/ProjectSection";
import QuestionSection from "@/components/QuestionSection";
import AxesSection from "@/components/AxesSection";
import ManifestoSection from "@/components/ManifestoSection";
import AlliesSection from "@/components/AlliesSection";
import Footer from "@/components/Footer";
import {
  StarCluster,
  StarGradients,
  heroBottomLeftStars,
  heroTopRightStars,
  miniStars,
} from "@/components/Stars";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <section
          id="inicio"
          className="relative overflow-hidden px-4 pt-24 pb-32 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32"
        >
          <StarGradients />
          {/* Celular: grupos pequeños en los espacios libres de arriba y abajo */}
          <StarCluster stars={miniStars} className="top-3 right-2 aspect-square w-16 sm:hidden" />
          <StarCluster stars={miniStars} className="bottom-4 left-2 aspect-square w-16 sm:hidden" />
          {/* Tableta y escritorio */}
          <StarCluster
            stars={heroTopRightStars}
            className="top-4 right-0 hidden aspect-[3/5] w-24 sm:block md:w-32 lg:w-44"
          />
          <StarCluster
            stars={heroBottomLeftStars}
            className="bottom-0 left-0 hidden aspect-[3/4] w-40 sm:block md:w-52 lg:w-[19rem]"
          />

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
            <Countdown />

            <h1 className="relative mt-20 text-center font-bold leading-none tracking-tighter sm:mt-28 lg:mt-36">
              <span className="block text-2xl sm:text-4xl lg:text-5xl">CUENTA REGRESIVA PARA EL</span>
              <span className="mt-2 block text-5xl sm:text-7xl lg:text-8xl">LANZAMIENTO</span>
              <PixelHand className="absolute top-0 -right-16 hidden w-10 -rotate-12 sm:block lg:-right-24 lg:w-14" />
            </h1>
          </div>
        </section>

        <ProjectSection />
        <QuestionSection />
        <AxesSection />
        <ManifestoSection />
        <AlliesSection />
      </main>
      <Footer />
    </>
  );
}
