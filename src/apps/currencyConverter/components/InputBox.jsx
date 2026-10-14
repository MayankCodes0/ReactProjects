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
            className={`group flex items-center justify-between gap-4 rounded border border-[#2c2f2a] bg-[#101110] p-4 transition-colors duration-200 hover:border-[#41443d] focus-within:border-[#a3b18a] ${className}`}
        >
            <div className="w-1/2 min-w-0">
                <label
                    htmlFor={amountInputId}
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#92968d] transition-colors duration-200 group-focus-within:text-[#a3b18a]"
                >
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="w-full bg-transparent text-xl font-medium tracking-tight text-[#e8e9e4] outline-none placeholder:text-[#65685f] sm:text-2xl"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>

            <div className="flex w-1/2 min-w-0 flex-col items-end">
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#92968d]">
                    Currency
                </span>

                <div className="relative max-w-full">
                    <select
                        disabled={currencyDisable}
                        className="max-w-full cursor-pointer appearance-none rounded border border-[#41443d] bg-[#171916] py-2 pl-3 pr-8 text-xs font-semibold tracking-wide text-[#e8e9e4] outline-none transition-colors duration-200 hover:border-[#778468] focus:border-[#a3b18a] disabled:cursor-not-allowed disabled:opacity-50"
                        value={selectCurrency}
                        onChange={(e) => {
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }}
                    >
                        {currencyOptions.map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                                className="bg-[#171916] text-[#e8e9e4]"
                            >
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-[#a3b18a]">
                        ▼
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox