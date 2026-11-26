"use client";

import { TocItem } from "@ariadocs/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TableOfContents({ toc }: { toc: TocItem[] }) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const headings = toc
      .map((item) => ({
        item,
        element: document.getElementById(item.href.startsWith("#") ? item.href.slice(1) : item.href),
      }))
      .filter((entry): entry is { item: TocItem; element: HTMLElement } => Boolean(entry.element));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-12% 0px -72% 0px" },
    );

    headings.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;
  return (
    <aside className="not-prose fixed right-20 top-14 hidden w-48 xl:block">
      <nav className="text-sm">
        <p className="mb-2 font-semibold">On this page</p>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.href} style={{ paddingLeft: (item.depth - 1) * 12 }}>
              <Link
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={`block rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeHref === item.href ? "font-medium text-foreground" : "text-muted-foreground"}`}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
