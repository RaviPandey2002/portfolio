import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "../layout/container"

const highlights = [
  "1.4+ years professional experience",
  "300+ DSA problems solved",
  "Backend-first with full-stack delivery",
]

const focusAreas = [
  "API design, authentication, and RBAC",
  "Relational database architecture",
  "Production debugging and performance tuning",
]

export const Hero = () => {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="inline-flex items-center rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-700 backdrop-blur">
          Full-Stack Engineer
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            Ravi Pandey
          </h1>

          <h2 className="max-w-xl text-xl font-medium tracking-tight text-zinc-700 sm:text-2xl">
            Building scalable products with a backend-first mindset
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">
            Full-Stack Engineer with 1.4+ years of experience building maintainable web
            applications using Next.js, TypeScript, Node.js, and PostgreSQL. I focus on
            system design, clean architecture, and high-confidence delivery across API,
            database, auth, and UI layers.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-zinc-300/80 bg-white px-3 py-1.5 text-sm text-zinc-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-2 text-sm text-zinc-600">
          {focusAreas.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex items-center gap-4 text-zinc-600 lg:gap-6">
          <li>
            <a
              href="https://github.com/RaviPandey2002"
              title="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 transition hover:border-zinc-900 hover:text-zinc-900"
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
              className="flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 transition hover:border-zinc-900 hover:text-zinc-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a
              href="mailto:ravi2001pandey@gmail.com"
              title="Send Email"
              className="flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 transition hover:border-zinc-900 hover:text-zinc-900"
            >
              <Mail className="h-5 w-5" />
            </a>
          </li>
        </ul>

      </Container>
    </section>
  )
}
