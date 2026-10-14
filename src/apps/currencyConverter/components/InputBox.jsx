import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""

}) {
    const amountInputId = useId();

    return (

        <div
            className={`group relative rounded-2xl p-4 bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 focus-within:border-cyan-400/60 focus-within:ring-4 focus-within:ring-cyan-500/10 shadow-inner transition-all duration-300 flex items-center justify-between gap-4 ${className}`}
        >
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-focus-within:text-cyan-400 mb-1.5 block transition-colors duration-200"
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full bg-transparent text-slate-100 text-2xl font-bold tracking-tight outline-none placeholder:text-slate-600 focus:placeholder:text-slate-500 transition-colors"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value)) //pasred input value in Number cuz js is notorious for taking input as string
                    }}
                />
            </div>

            <div className="w-1/2 flex flex-col items-end">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-1.5">
                    Currency
                </span>
                <div className="relative">
                    <select
                        className="appearance-none rounded-xl pl-3 pr-8 py-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-semibold tracking-wide backdrop-blur-md outline-none cursor-pointer focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 shadow-md transition-all duration-200"
                        value={selectCurrency}
                        onChange={(e) => {
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency} className="bg-slate-900 text-slate-200">
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                        ▼
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox