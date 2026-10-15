import { useState } from 'react'
import '../../App.css';
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import ProjectConcepts from '../../components/common/ProjectConcepts';
import { projectConceptsData } from '../../data/projectConceptsData';

function CurrencyConverterApp() {
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
    <main className="min-h-[calc(100vh-65px)] w-full bg-[#101110] px-5 py-16 text-[#e8e9e4] sm:py-24">
      <div className="mx-auto max-w-4xl">

        <div className="mx-auto max-w-2xl">
          {/* Heading */}
          <p className="mb-4 text-xs font-semibold tracking-[2px] text-[#a3b18a]">
            INTERACTIVE PROJECT / 03
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Currency <span className="text-[#a3b18a]">Converter.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#92958b] sm:text-base">
            Convert between currencies using exchange rate data.
            Select your currencies, enter an amount, and calculate the conversion.
          </p>

          {/* Converter Card */}
          <div className="mt-10 rounded border border-[#2c2f2a] bg-[#171916] p-6 sm:p-8">

            {/* Card Header */}
            <div className="mb-7 flex items-center justify-between border-b border-[#2c2f2a] pb-5">
              <div>
                <p className="text-xs font-semibold tracking-[1.5px] text-[#92968d]">
                  EXCHANGE TOOL
                </p>
                <p className="mt-2 text-sm text-[#777a71]">
                  Currency exchange calculator
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* From Section */}
              <div className="w-full rounded border border-[#2c2f2a] bg-[#101110] p-4 transition-colors focus-within:border-[#778468] sm:p-5">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency);
                  }}
                  onAmountChange={(amount) => {
                    amount < 0 ? '' : setAmount(amount);
                  }}
                  selectCurrency={from}
                />
              </div>

              {/* Swap Button */}
              <div className="relative z-10 flex h-12 items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-[#2c2f2a]" />

                <button
                  type="button"
                  onClick={swap}
                  aria-label="Swap currencies"
                  className="group relative flex h-10 w-10 items-center justify-center rounded border border-[#41443d] bg-[#171916] text-[#a3b18a] transition-colors duration-200 hover:border-[#a3b18a] hover:bg-[#1c1f1a] active:scale-95"
                >
                  <span className="text-xl transition-transform duration-200 group-hover:rotate-180">
                    ⇅
                  </span>
                </button>
              </div>

              {/* To Section */}
              <div className="mb-7 w-full rounded border border-[#2c2f2a] bg-[#101110] p-4 transition-colors focus-within:border-[#778468] sm:p-5">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setTo(currency);
                  }}
                  onAmountChange={(amount) => {
                    amount < 0 ? '' : setConvertedAmount(amount);
                  }}
                  selectCurrency={to}
                />
              </div>

              {/* Convert Button */}
              <button
                type="submit"
                className="w-full rounded border border-[#a3b18a] bg-[#a3b18a] px-4 py-3.5 text-sm font-semibold tracking-wide text-[#101110] transition-colors duration-200 hover:bg-[#b4c09d] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a3b18a]"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-[#2c2f2a] pt-5 text-xs text-[#777a71]">
              <span>From: {from.toUpperCase()}</span>
              <span>To: {to.toUpperCase()}</span>
            </div>

          </div>

          {/* Footer Note */}
          <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-[#777a71]">
            <span>Built with React useState</span>
            <span>Currency conversion tool</span>
          </div>
        </div>

        {/* Information Div below actual project interface */}
        <div className="mt-14 w-full">
          <ProjectConcepts {...projectConceptsData.currencyConverter} />
        </div>

      </div>
    </main>
  );
}

export default CurrencyConverterApp