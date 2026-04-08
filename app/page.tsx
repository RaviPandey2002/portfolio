import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skill";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-10 md:py-14 lg:h-screen lg:overflow-hidden lg:px-4 lg:py-0">
      <div className="justify-between lg:flex lg:h-full">
        <header className="lg:flex lg:h-full lg:w-[46%] lg:items-center lg:py-20">
          <div className="w-full">
            <Hero />
          </div>
        </header>

        <main
          id="main"
          className="custom-scrollbar mt-10 border-t border-zinc-200 py-8 md:py-10 lg:mt-0 lg:h-full lg:w-[54%] lg:overflow-y-auto lg:border-l lg:border-t-0 lg:pl-10 lg:pr-2 lg:pt-20"
        >
          <Skills />
        </main>
      </div>
    </div>
  );
}
