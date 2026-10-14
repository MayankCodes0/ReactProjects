import { useState } from 'react'
import '../../App.css';

function CounterApp() {
  let [counter, setCounter] = useState(0);
  let [var1, setVar1] = useState("");

  const addValue = () => {
    if(counter >= 20) {
      setVar1("counter can't go above 20");
      return;
    }
    setCounter(counter + 1);
    setVar1("");
    console.log("add btn clicked\ncounter value is ", counter);
  }

  const substractValue = () => {
    if(counter <= 0) {
      setVar1("counter can't go below 0");
      return;
    }
    setCounter(counter - 1);
    setVar1("");
    console.log("substract btn clicked\ncounter value is ", counter);
  }

  return (
    <main className="min-h-[calc(100vh-65px)] bg-[#101110] px-5 py-16 text-[#e8e9e4] sm:py-24">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <p className="mb-4 text-xs font-semibold tracking-[2px] text-[#a3b18a]">
          INTERACTIVE PROJECT / 01
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Counter <span className="text-[#a3b18a]">App.</span>
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-[#92958b] sm:text-base">
          A simple React counter demonstrating state management,
          event handling, and conditional boundaries.
        </p>

        {/* Counter Card */}
        <section className="mt-12 rounded border border-[#2c2f2a] bg-[#171916] p-6 sm:p-10">

          <div className="flex items-center justify-between border-b border-[#2c2f2a] pb-5">
            <span className="text-xs font-medium tracking-[1.5px] text-[#92968d]">
              CURRENT COUNT
            </span>
            <span className="text-xs text-[#777a71]">
              MIN 00 / MAX 20
            </span>
          </div>

          {/* Count Display */}
          <div className="py-10 text-center">
            <p className="text-8xl font-semibold tabular-nums tracking-tighter text-[#a3b18a] sm:text-9xl">
              {String(counter).padStart(2, '0')}
            </p>
            <p className="mt-4 text-sm text-[#85887f]">
              {counter === 0
                ? "Ready to get started"
                : counter === 20
                ? "Maximum limit reached"
                : "Keep counting"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs text-[#85887f]">
              <span>Progress</span>
              <span>{(counter / 20) * 100}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#292b28]">
              <div
                className="h-full rounded-full bg-[#a3b18a] transition-all duration-200"
                style={{ width: `${(counter / 20) * 100}%` }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={substractValue}
              className="rounded border border-[#41443d] bg-transparent px-4 py-3 text-sm font-medium text-[#d0d1ca] transition-colors hover:border-[#778468] hover:bg-[#1c1f1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3b18a] active:scale-[0.98]"
            >
              <span className="mr-2 text-lg">−</span>
              Subtract
            </button>

            <button
              onClick={addValue}
              className="rounded border border-[#a3b18a] bg-[#a3b18a] px-4 py-3 text-sm font-semibold text-[#101110] transition-colors hover:bg-[#b4c09d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3b18a] active:scale-[0.98]"
            >
              <span className="mr-2 text-lg">+</span>
              Add
            </button>
          </div>

          {/* Error Message */}
          <div className="mt-5 min-h-5">
            {var1 && (
              <p role="alert" className="text-center text-sm text-[#d69a8f]">
                {var1}
              </p>
            )}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-[#777a71]">
          <span>Built with React useState</span>
          <span>Range: 0 — 20</span>
        </div>

      </div>
    </main>
  )
}

export default CounterApp