import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skill";

export default function Home() {
  return (
    <div className="lg:flex lg:gap-6 justify-between lg:max-h-screen lg:overflow-scroll">
      <Hero />

      <div className="lg:w-[52%]">
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
      
    </div>
  );
}
