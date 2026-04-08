import {
  Braces,
  Database,
  ExternalLink,
  Github,
  Layers3,
  ServerCog,
} from "lucide-react";

import { Container } from "../layout/container";


const techList = [
  {
    icon: Layers3,
    title: "Frontend",
    summary: "Responsive interfaces with a strong focus on usability, speed, and clean component structure.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "from-amber-100 via-white to-white",
    iconTone: "bg-amber-500 text-white",
  },
  {
    icon: ServerCog,
    title: "Backend",
    summary: "API-first systems designed for reliability, authorization, and low-friction product workflows.",
    stack: ["Node.js", "Express", "REST APIs", "WebSockets"],
    accent: "from-sky-100 via-white to-white",
    iconTone: "bg-sky-600 text-white",
  },
  {
    icon: Database,
    title: "Data & Infra",
    summary: "Production-minded schema design and delivery pipelines that keep systems maintainable as they grow.",
    stack: ["PostgreSQL", "Schema Design", "Docker", "CI/CD"],
    accent: "from-emerald-100 via-white to-white",
    iconTone: "bg-emerald-600 text-white",
  },
  {
    icon: Braces,
    title: "Engineering Habits",
    summary: "Code shaped around readability, ownership, and shipping features that stay easy to extend.",
    stack: ["Architecture", "Debugging", "Refactoring", "Performance"],
    accent: "from-rose-100 via-white to-white",
    iconTone: "bg-rose-600 text-white",
  },
];

const projectList = [
  {
    title: "HireHub",
    description:
      "Full-stack job portal with role-based flows for recruiters and candidates, built around a clean hiring workflow.",
    tags: "Next.js, Full Stack, RBAC",
    liveUrl: "https://hire-hub-steel.vercel.app",
    repoUrl: "https://github.com/RaviPandey2002/HireHub",
  },
  {
    title: "Code-Xerox",
    description:
      "Collaborative code editor with room-based sessions, live code sharing, chat, and video calling for real-time teamwork.",
    tags: "JavaScript, Socket.io, PeerJS",
    liveUrl: "https://code-xerox-i8fr.onrender.com/",
    repoUrl: "https://github.com/RaviPandey2002/Code-Xerox",
  },
  {
    title: "Expense Management System",
    description:
      "Expense tracking app for adding, editing, categorizing, and visualizing spending with reporting and auth flows.",
    tags: "React, Charts, Auth",
    liveUrl: "https://expense-management-system-bice.vercel.app/",
    repoUrl: "https://github.com/RaviPandey2002/Expense-Management-System",
  },
  {
    title: "Food Villa",
    description:
      "React-based food exploration app focused on clean UI composition and core frontend fundamentals without heavy UI frameworks.",
    tags: "React, UI, Netlify",
    liveUrl: "https://my-food-villa-website.netlify.app/",
    repoUrl: "https://github.com/RaviPandey2002/Food-Villa",
  },
];

const engineeringList = [
  "End-to-end feature ownership from schema design to frontend integration",
  "Authentication and authorization with secure role boundaries",
  "Production debugging with a performance and maintainability focus",
];

export function Skills() {
  return (
    <section id="skills" className="space-y-14 pb-8">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Core Stack
          </h2>
          <p className="mt-4 text-zinc-600">
            Technologies I use to build production-ready, maintainable systems.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {techList.map((item) => (
            <article
              key={item.title}
              className={`rounded-[1.75rem] border border-zinc-200 bg-gradient-to-br ${item.accent} p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md lg:p-7`}
            >
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Specialty
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-zinc-900">{item.title}</h3>
                  </div>
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconTone} shadow-sm`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Focus
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 lg:max-w-none lg:text-[15px]">
                    {item.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {item.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-zinc-300/80 bg-white/90 px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Project Highlights
          </h2>
          <p className="mt-4 text-zinc-600">
            A few products where I handled architecture and implementation end to end.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {projectList.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{item.description}</p>
              <p className="mt-4 text-sm font-medium text-amber-700">{item.tags}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Engineering Approach
          </h2>
        </div>

        <ul className="mt-6 space-y-3 text-zinc-700">
          {engineeringList.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
