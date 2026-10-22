const links = [
  {
    name: "Find The Killer",
    url: "https://killer.reasonpokhrel.com.np",
    desc: "A Game of Hidden Roles",
  },
  {
    name: "TypeMaster",
    url: "https://typemaster.reasonpokhrel.com.np",
    desc: "A Simple Typing Speed Tester",
  },
  {
    name: "Expense Tracker",
    url: "https://expense-tracker.reasonpokhrel.com.np",
    desc: "An Expense Tracker with Local Storage and Category Filtering",
  },
];

export default function App() {
  return (
    <main
      className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-300 sm:py-24"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Reason Pokhrel
        </h1>
        <p className="mt-2 text-neutral-500">Things I've built.</p>
        <ul className="mt-12 space-y-3">
          {links.map(({ name, url, desc }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-neutral-800 p-4 transition hover:border-neutral-600 hover:bg-neutral-900"
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
