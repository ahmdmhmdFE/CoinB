// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CionContext } from "../../context/CionContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCion, currency } = useContext(CionContext);
  const [displayCion, setDisplayCion] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCion(allCion);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCion.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCion(coins)
  }

  useEffect(() => {
    setDisplayCion(allCion);
  }, [allCion]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> CurrencyMarketplace
        </h1>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search Crypto..."
            required
          />

          <datalist id="coinlist">
            {allCion.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>R</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCion.slice(0, 10).map((item, index) => (
          <Link to={`/cion/${item.id}`} key={index} className="table-layout">
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
