import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "../layout/container"

export const Hero = () => {
  return (
    <section id="hero">
      <Container>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ravi Pandey
          </h1>

          <h2 className="text-lg font-medium tracking-tight sm:text-xl text-gray-700">
            Backend-Leaning Full Stack Developer
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
            I build scalable systems and clean user interfaces using
            modern web technologies.
          </p>
        </div>

        <ul className="mt-6 flex items-center gap-4 lg:gap-6 text-gray-600">
          <li>
            <a
              href="https://github.com/RaviPandey2002"
              title="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full border p-1 lg:p-2 transition hover:border-black hover:text-black"
            >
              <Github className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ravi2002pandey/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full border p-1 lg:p-2 transition hover:border-black hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="mailto:ravi2001pandey@gmail.com"
              title="Send Email"
              className="flex items-center justify-center rounded-full border p-1 lg:p-2 transition hover:border-black hover:text-black"
            >
              <Mail className="h-5 w-5" />
            </a>
          </li>
        </ul>

      </Container>
    </section>
  )
}