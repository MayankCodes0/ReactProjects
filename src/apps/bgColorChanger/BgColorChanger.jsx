import { useState } from "react";

function BgColorChanger() {
  const [color, setColor] = useState("#101110");

  const colors = [
    { name: "Red", value: "#b85c5c" },
    { name: "Blue", value: "#5c7fb8" },
    { name: "Green", value: "#718b68" },
    { name: "Yellow", value: "#b5a45c" },
    { name: "Purple", value: "#8c70a8" },
  ];

  return (
    <main
      className="min-h-screen w-full transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-36 pt-16 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-white/60">
          Interactive Project
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Background Color Changer
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/65 sm:text-base">
          Change the background with a single click.
          Choose a color below to get started.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded border border-white/15 bg-black/10 px-4 py-3">
          <span
            className="h-3 w-3 rounded-full border border-white/30"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm font-medium text-white/80">
            {color.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Color Controls */}
      <div className="fixed bottom-5 left-1/2 z-50 w-[94%] max-w-2xl -translate-x-1/2">
        <div className="rounded-xl border border-[#41443d] bg-[#171916]/95 p-3 shadow-2xl backdrop-blur-md">
          <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#92958b]">
            Choose a background
          </p>

          <div className="grid grid-cols-5 gap-2">
            {colors.map((item) => (
              <button
                key={item.name}
                onClick={() => setColor(item.value)}
                aria-label={`Change background to ${item.name}`}
                aria-pressed={color === item.value}
                className={`flex min-w-0 flex-col items-center gap-2 rounded-lg border p-2 transition-all duration-200 hover:-translate-y-0.5 ${
                  color === item.value
                    ? "border-[#a3b18a] bg-[#a3b18a]/10"
                    : "border-[#2c2f2a] hover:border-[#55594e]"
                }`}
              >
                <span
                  className="h-7 w-7 rounded-md border border-white/15"
                  style={{ backgroundColor: item.value }}
                />

                <span
                  className={`text-xs font-medium ${
                    color === item.value
                      ? "text-[#a3b18a]"
                      : "text-[#b8bab2]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BgColorChanger;