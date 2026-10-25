const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Reason186",
    color: "#ffffff",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reason186",
    color: "#0a66c2",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect
          x="2"
          y="9"
          width="4"
          height="12"
        />
        <circle
          cx="4"
          cy="4"
          r="2"
        />
      </>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/reason186",
    color: "#e1306c",
    icon: (
      <>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
        />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
        />
      </>
    ),
  },
];

const links = [
  {
    name: "Find The Killer",
    url: "https://killer.reasonpokhrel.com.np",
    desc: "A Game of Hidden Roles",
    color: "#e11d48",
  },
  {
    name: "TypeMaster",
    url: "https://typemaster.reasonpokhrel.com.np",
    desc: "A Simple Typing Speed Tester",
    color: "#e2b714",
  },
  {
    name: "Expense Tracker",
    url: "https://expense-tracker.reasonpokhrel.com.np",
    desc: "An Expense Tracker with Local Storage and Category Filtering",
    color: "#55ff91",
  },
];

export default function App() {
  return (
    <main
      className="flex h-dvh flex-col bg-neutral-950 pt-16 text-center text-neutral-300 sm:pt-24"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* fixed header */}
      <header className="shrink-0 px-6 pb-6">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Reason Pokhrel
        </h1>

        <div className="mt-5 flex items-center justify-center gap-6">
          {socials.map(({ name, url, color, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              style={{ "--c": color }}
              className="text-neutral-400 transition duration-700 ease-out hover:text-(--c) hover:drop-shadow-[0_0_10px_var(--c)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icon}
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-8 text-neutral-500">Things I've built.</p>
      </header>

      {/* scrolling list */}
      <div
        className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 pb-16 pt-4
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-neutral-800
          hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600
          supports-[-moz-appearance:none]:scrollbar-thin
          supports-[-moz-appearance:none]:[scrollbar-color:#404040_transparent]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 16px, black calc(100% - 28px), transparent)",
        }}
      >
        <ul className="group mx-auto max-w-xl space-y-4">
          {links.map(({ name, url, desc, color }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{ "--c": color, "--glow": `${color}33` }}
                className="block rounded-lg border border-neutral-800 p-4 transition duration-700 ease-out hover:bg-neutral-900 hover:border-(--c) hover:shadow-[0_0_60px_8px_var(--glow)] group-hover:opacity-60 hover:opacity-100! hover:scale-105"
              >
                <span className="font-medium text-white">{name} ↗</span>
                <span className="block text-sm text-neutral-500">{desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
