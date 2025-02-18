import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

        fetch(url)
            .then((res) => res.json()) // ✅ Corrected `.json()`
            .then((data) => setData(data[currency])) // ✅ Using `data` correctly
            .catch((error) => console.error("Error fetching data:", error)); // ✅ Error handling

    }, [currency]); // ✅ Only `currency` as a dependency

    return data;
}

export default useCurrencyInfo;
