import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

const installCommand = "npm install pawql";
const exampleCode = `import { connect } from "pawql";

const db = await connect({
  users: {
    id: { type: Number, primaryKey: true },
    name: String,
    isActive: { type: Boolean, default: true },
  },
}, process.env.DATABASE_URL!);

const users = await db.query("users")
  .where({ isActive: true })
  .select("id", "name")
  .execute();`;

const features = [
  {
    title: "Runtime-first schema",
    description:
      "Define tables with plain JavaScript objects. No schema language or generated client to maintain.",
  },
  {
    title: "Type-safe queries",
    description:
      "Get TypeScript inference from your schema through selects, filters, joins, and mutations.",
  },
  {
    title: "Your database, your runtime",
    description:
      "Use PostgreSQL, MySQL or MariaDB, and SQLite with Node.js or Bun.",
  },
];

export default function Page() {
  return (
    <main className="not-prose py-8 sm:py-14">
      <section className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          Type-safe ORM for TypeScript
        </div>

        <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Meet <span className="text-primary">PawQL</span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-muted-foreground">
          A runtime-first ORM that infers database types from your schema. Build
          with a clean query API, without code generation or a separate build
          step.
        </p>

        <div className="mb-7 inline-flex items-center gap-3 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm">
          <span className="text-muted-foreground">$</span>
          <span>{installCommand}</span>
          <CopyButton value={installCommand} label="Copy install command" />
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/docs/orm/getting-started"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Get started
          </Link>
          <Link
            href="https://github.com/ahmatfauzy/pawql-orm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-accent"
          >
            View on GitHub
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-xl border bg-muted/30 p-5 text-left sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-sm font-medium text-muted-foreground">
          <span>A typed query, from schema to result</span>
          <CopyButton value={exampleCode} label="Copy example" />
        </div>
        <pre className="overflow-x-auto text-sm leading-6">
          <code>{exampleCode}</code>
        </pre>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-xl border p-5">
            <h2 className="mb-2 font-semibold">{feature.title}</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </section>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Read the <Link className="underline underline-offset-4" href="/docs/overview">PawQL overview</Link>
        {" "}or browse the complete <Link className="underline underline-offset-4" href="/docs/orm">documentation</Link>.
      </p>
    </main>
  );
}
