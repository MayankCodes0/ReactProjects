import { useState } from "react";
function App() {
  const [color, setColor] = useState("Black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-50
      w-[92%] max-w-3xl
      p-3
      rounded-[28px]

      bg-white/20
      backdrop-blur-2xl
      backdrop-saturate-150

      border border-white/30
      shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    "
        >
          <div
            className="
        flex items-center gap-3
        p-2
        rounded-[22px]

        bg-white/25
        backdrop-blur-xl

        border border-white/30
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]
      "
          >

            {/* Red */}
            <button
              onClick={() => setColor("red")}
              className="
          flex-1 h-12
          rounded-2xl

          bg-white/30
          backdrop-blur-md
          border border-white/40

          text-white
          font-semibold

          shadow-[0_4px_15px_rgba(0,0,0,0.15)]

          transition-all duration-300
          hover:bg-white/45
          hover:border-white/60
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

          active:scale-95
        "
            >
              Red
            </button>

            {/* Blue */}
            <button
              onClick={() => setColor("blue")}
              className="
          flex-1 h-12
          rounded-2xl

          bg-white/30
          backdrop-blur-md
          border border-white/40

          text-white
          font-semibold

          shadow-[0_4px_15px_rgba(0,0,0,0.15)]

          transition-all duration-300
          hover:bg-white/45
          hover:border-white/60
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

          active:scale-95
        "
            >
              Blue
            </button>

            {/* Green */}
            <button
              onClick={() => setColor("green")}
              className="
          flex-1 h-12
          rounded-2xl

          bg-white/30
          backdrop-blur-md
          border border-white/40

          text-white
          font-semibold

          shadow-[0_4px_15px_rgba(0,0,0,0.15)]

          transition-all duration-300
          hover:bg-white/45
          hover:border-white/60
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

          active:scale-95
        "
            >
              Green
            </button>

            {/* Yellow */}
            <button
              onClick={() => setColor("yellow")}
              className="
          flex-1 h-12
          rounded-2xl

          bg-white/30
          backdrop-blur-md
          border border-white/40

          text-white
          font-semibold

          shadow-[0_4px_15px_rgba(0,0,0,0.15)]

          transition-all duration-300
          hover:bg-white/45
          hover:border-white/60
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

          active:scale-95
        "
            >
              Yellow
            </button>

            {/* Purple */}
            <button
              onClick={() => setColor("purple")}
              className="
          flex-1 h-12
          rounded-2xl

          bg-white/30
          backdrop-blur-md
          border border-white/40

          text-white
          font-semibold

          shadow-[0_4px_15px_rgba(0,0,0,0.15)]

          transition-all duration-300
          hover:bg-white/45
          hover:border-white/60
          hover:-translate-y-1
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]

          active:scale-95
        "
            >
              Purple
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
