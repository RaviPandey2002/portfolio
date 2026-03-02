import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skill";

export default function Home() {
  return (
    <div className="py-12 md:py-16 mx-auto max-w-7xl lg:p-0">

      <div className=" lg:flex justify-between" >
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <Hero />
        </header>

        <main id="main" className="py-8 md:py-12 lg:py-20 border-t lg:w-[52%]">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </main>
      </div>

    </div>
  );
}
