import Navbar from "@/components/Navbar";
import ModelViewer from "@/components/Kanku3D/model";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative flex flex-col items-center justify-center w-screen h-screen">
        {/* Dotted BG */}
        <HeroHighlight>
          <div className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full">
            {/* "Kyokushin" Text on Left */}
            <h1 className="lg:absolute lg:left-[10%] text-[36px] lg:text-[64px] font-bold text-white tracking-wide transform scale-125 lg:scale-y-150 mb-[-170px] lg:mb-0">
              Kyokushin
            </h1>

            {/* Model Viewer */}
            <div className="flex items-center justify-center w-full h-full">
              <ModelViewer />
            </div>

            {/* "Bangladesh" Text on Right */}
            <h1 className="lg:absolute lg:right-[10%] text-[36px] lg:text-[64px] font-bold text-white  transform scale-125 lg:scale-y-150 mt-[-180px] lg:mt-0">
              Bangladesh
            </h1>

            {/* Button centered at the bottom */}
            <button className="p-[3px] bottom-10 absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-800 to-gray-200" />
              <div className="px-9 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:text-black hover:bg-transparent font-bold">
                Join Us Now!
              </div>
            </button>
          </div>
        </HeroHighlight>
      </section>

      <section>
        <div className="h-24 bg-white">
          <div className="text-black z-20">Something</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
