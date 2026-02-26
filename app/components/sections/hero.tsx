import { Container } from "../layout/container"

export const Hero = () => {
  return (
    <section id="hero" className="py-15 md:py-20 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <Container>
        <div className="gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ravi Pandey
          </h1>

          <h2 className="mt-1 text-lg font-medium tracking-tight sm:text-xl">
            Backend-Leaning, Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            I build scalable systems and clean user interfaces using
            modern web technologies.
          </p>
        </div>
      </Container>
    </section>
  )
}