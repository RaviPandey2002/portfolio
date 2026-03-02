import { Container } from "../layout/container";


const techList = [
  {
    title: "Frontend",
    stack: "React, Next.js, TypeScript, Tailwind",
  },
  {
    title: "Backend",
    stack: "Node.js, Express, MongoDB, PostgreSQL",
  },
  {
    title: "DevOps",
    stack: "GitHub, Linux, CI/CD",
  },
];

export function Skills() {
  return (
    <section id="skills" className="mb-10">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Skills
          </h2>
          <p className="mt-6 text-gray-600">
            Technologies I use to build scalable and production-ready applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {techList.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border p-6 transition hover:shadow-sm"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.stack}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}