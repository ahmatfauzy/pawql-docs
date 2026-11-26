import Link from "next/link";

export default function DocNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Documentation page not found
      </p>
      <Link
        href="/docs/overview"
        className="rounded-md bg-foreground px-5 py-3 font-medium text-background hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Back to documentation
      </Link>
    </div>
  );
}
