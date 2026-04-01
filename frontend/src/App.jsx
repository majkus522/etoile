import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import iconFavourite from "./assets/ulubione.png";
import iconCart from "./assets/Cart.png";
import iconLogo from "./assets/logo.png";
import iconSample from "./assets/Sample.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={iconLogo} alt="Logo" />
        </a>

        <ul className="nav-menu">
          <li>
            <a href="#kreator">Kreator</a>
          </li>
          <li>
            <a href="#kolekcje">Kolekcje</a>
          </li>
          <li>
            <a href="#onas">O nas</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="#ulubione"
            className="nav-icon"
            onClick={() => console.log("Ulubione")}
          >
            <img
              src={iconFavourite}
              alt="Ulubione"
              className="nav-iconFav-img"
            />
          </a>
          <a
            href="#ulubione"
            className="nav-icon"
            onClick={() => console.log("Koszyk")}
          >
            <img src={iconCart} alt="Koszyk" className="nav-iconCart-img" />
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="card">
          <img
            style={{ marginBottom: "30px" }}
            src={iconSample}
            alt="Przykład"
            className="wyb-Sample-img"
          />
          <ht className="card-title">CENA CAŁKOWITA</ht>
          <hp style={{ marginBottom: "30px" }} className="card-price">
            6200 zł
          </hp>
        </div>
      </main>
    </div>
  );
}

export default App;
