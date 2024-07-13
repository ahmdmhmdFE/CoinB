import { createContext, useEffect, useState } from "react";

export const CionContext = createContext()

const CoinContextProvider = (props) => {

  const [allCion, setAllCion] = useState([])
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  })

  const fetchAllCions = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-i1yHdW23MvCDkGeDnSCeqtTZ",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCion(response))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAllCions();
  }, [currency]);

  const contextValue = {
    allCion, currency, setCurrency
  }
  return (
    <CionContext.Provider value={contextValue}>
      {props.children}
    </CionContext.Provider>
  );
}

export default CoinContextProvider