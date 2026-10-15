export default function ProjectConcepts({
  projectName,
  overview,
  reactConcepts = [],
  jsConcepts = [],
  keyTakeaways = [],
  containerClassName = "",
}) {
  return (
    <div
      className={`mt-16 w-full rounded-2xl border border-[#2c2f2a] bg-[#171916]/95 p-6 shadow-2xl backdrop-blur-md sm:p-10 ${containerClassName}`}
    >
      {/* Header */}
      <div className="border-b border-[#2c2f2a] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[2px] text-[#a3b18a]">
            <span className="h-2 w-2 rounded-full bg-[#a3b18a]" />
            CONCEPTS &amp; ARCHITECTURE
          </p>
          <span className="rounded border border-[#41443d] bg-[#101110] px-3 py-1 font-mono text-xs text-[#a3b18a]">
            {projectName}
          </span>
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#e8e9e4] sm:text-3xl">
          React &amp; JavaScript Concepts Implemented
        </h2>

        {overview && (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#92958b] sm:text-base">
            {overview}
          </p>
        )}
      </div>

      {/* Grid: React Concepts & JavaScript Concepts */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* React Concepts Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#a3b18a]/40 bg-[#a3b18a]/10 text-xs font-bold text-[#a3b18a]">
              ⚛
            </span>
            <h3 className="text-lg font-semibold tracking-wide text-[#e8e9e4]">
              React Concepts
            </h3>
            <span className="ml-auto text-xs font-mono text-[#777a71]">
              ({reactConcepts.length})
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {reactConcepts.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-[#2c2f2a] bg-[#101110] p-4 transition-colors "
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#e8e9e4]">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span className="rounded bg-[#a3b18a]/15 px-2 py-0.5 font-mono text-[11px] font-medium text-[#a3b18a]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#92958b] sm:text-sm">
                  {item.description}
                </p>

                {item.code && (
                  <div className="mt-3 overflow-x-auto rounded border border-[#292b28] bg-[#141613] px-3 py-2 font-mono text-[11px] text-[#b4c09d]">
                    <code>{item.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* JavaScript Concepts Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#d6a55c]/40 bg-[#d6a55c]/10 text-xs font-bold text-[#d6a55c]">
              JS
            </span>
            <h3 className="text-lg font-semibold tracking-wide text-[#e8e9e4]">
              JavaScript Concepts
            </h3>
            <span className="ml-auto text-xs font-mono text-[#777a71]">
              ({jsConcepts.length})
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {jsConcepts.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-[#2c2f2a] bg-[#101110] p-4 transition-colors "
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#e8e9e4]">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span className="rounded bg-[#d6a55c]/15 px-2 py-0.5 font-mono text-[11px] font-medium text-[#d6a55c]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#92958b] sm:text-sm">
                  {item.description}
                </p>

                {item.code && (
                  <div className="mt-3 overflow-x-auto rounded border border-[#292b28] bg-[#141613] px-3 py-2 font-mono text-[11px] text-[#e0cf8f]">
                    <code>{item.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Architectural Takeaways Footer */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="mt-8 rounded-xl border border-[#3b4234] bg-[#1c221a]/60 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#a3b18a]">
            Key Architectural Takeaways
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-[#d0d1ca] sm:text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3b18a]" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
