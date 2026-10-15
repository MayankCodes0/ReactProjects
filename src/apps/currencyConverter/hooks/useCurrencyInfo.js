import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                }
            })
            .catch((err) => {
                console.error("Failed to fetch currency rates:", err);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;