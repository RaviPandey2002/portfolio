import { Container } from "../layout/container"

export const Hero = () => {
  return (
    <section id="hero" className="">
      <Container>
        <div className="gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ravi Pandey
          </h1>

          <h2 className="mt-1 text-lg font-medium tracking-tight sm:text-xl">
            Backend-Leaning, Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl leading-normal text-gray-600">
            I build scalable systems and clean user interfaces using
            modern web technologies.
          </p>
        </div>
      </Container>

      <Container className="ml-1 lg:ml-4">
        <ul className="flex flex-center gap-6">
          <li>
            i
          </li>
          <li>
            c
          </li>
          <li>
            o
          </li>
          <li>
            n
          </li>
        </ul>
      </Container>

    </section>
  )
}