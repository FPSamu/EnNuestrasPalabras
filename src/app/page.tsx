import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import PixelHand from "@/components/PixelHand";
import ProjectSection from "@/components/ProjectSection";
import QuestionSection from "@/components/QuestionSection";
import AxesSection from "@/components/AxesSection";
import ManifestoSection from "@/components/ManifestoSection";
import AlliesSection from "@/components/AlliesSection";
import Footer from "@/components/Footer";
import { StarCluster, StarGradients, bottomLeftStars, topRightStars } from "@/components/Stars";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <section
          id="inicio"
          className="relative overflow-hidden px-4 pt-16 pb-24 sm:pt-24 lg:pt-32 lg:pb-32"
        >
          <StarGradients />
          <StarCluster stars={topRightStars} />
          <StarCluster stars={bottomLeftStars} />

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
            <Countdown />

            <h1 className="relative mt-20 text-center font-bold leading-none tracking-tighter sm:mt-28 lg:mt-36">
              <span className="block text-2xl sm:text-4xl lg:text-5xl">CUENTA REGRESIVA PARA EL</span>
              <span className="mt-2 block text-5xl sm:text-7xl lg:text-8xl">LANZAMIENTO</span>
              <PixelHand className="absolute -right-10 top-0 w-7 -rotate-12 sm:-right-16 sm:w-10 lg:-right-24 lg:w-14" />
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
