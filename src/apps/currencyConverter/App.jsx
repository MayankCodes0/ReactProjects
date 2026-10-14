import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#070b14] relative overflow-hidden font-sans">
      {/* Ambient glowing radial blobs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/3 translate-y-1/3 w-80 sm:w-[460px] h-80 sm:h-[460px] bg-indigo-600/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Outer card wrapper */}
      <div className="w-full max-w-md relative z-10">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-white/[0.05] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]">

          {/* Header */}
          <div className="mb-6 text-center">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-sm mb-2">
              FX Converter
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Exchange Rates
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Fast, transparent currency conversions
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* 'From' Section */}
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectCurrency={from}
              />
            </div>

            {/* Floating Swap Divider */}
            <div className="relative w-full h-6 flex items-center justify-center my-1 z-20">
              <div className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button
                type="button"
                onClick={swap}
                className="group relative flex items-center justify-center p-2 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/20 hover:border-cyan-400/50 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-90 transition-all duration-300 cursor-pointer"
              >
                <span className="text-cyan-400 font-bold text-sm block transition-transform duration-300 group-hover:rotate-180">
                  ⇅
                </span>
              </button>
            </div>

            {/* 'To' Section */}
            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                onAmountChange={(amount) => {
                  setConvertedAmount(amount);
                }}
                selectCurrency={to}
              />
            </div>

            {/* Glass Glow Action Button */}
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-2xl py-3.5 px-4 font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-[0_10px_25px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(6,182,212,0.6)] active:scale-[0.98] border border-cyan-300/30 transition-all duration-300 cursor-pointer"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
