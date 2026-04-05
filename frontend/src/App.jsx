import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import iconFavourite from "./assets/ulubione.png";
import iconCart from "./assets/Cart.png";
import iconLogo from "./assets/logo.png";
import iconAcc from "./assets/account.png";
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
            <a href="#blog">Blog</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="#ulubione"
            className="nav-icon"
            onClick={() => console.log("ulubione")}
          >
            <img
              src={iconFavourite}
              alt="ulubione"
              className="nav-iconFav-img"
            />
          </a>
          <a
            href="#koszyk"
            className="nav-icon"
            onClick={() => console.log("koszyk")}
          >
            <img src={iconCart} alt="koszyk" className="nav-iconCart-img" />
          </a>
          <a
            href="#konto"
            className="nav-icon"
            onClick={() => console.log("konto")}
          >
            <img src={iconAcc} alt="konto" className="nav-iconAcc-img" />
          </a>
        </div>
      </nav>

      <main className="main-content">
        {/* LEWA STRONA */}
        <div className="left-side">
          <div className="card">
            <img
              style={{ marginBottom: "30px" }}
              src={iconSample}
              alt="Przykład"
              className="wyb-Sample-img"
            />
            <h2 className="card-title">CENA CAŁKOWITA</h2>
            <p style={{ marginBottom: "30px" }} className="card-price">
              6200 zł
            </p>
          </div>
        </div>

        <div className="divider"></div>

        {/* PRAWA STRONA */}
        <div className="right-side">
          <div className="scroll-content">
            <h2>Wybór materiałów</h2>
            {
              <img
                style={{ marginBottom: "30px" }}
                src={iconFavourite}
                alt="Przykład"
                className="wyb-Sample-img"
              />
            }
            <div
              style={{
                height: "1500px",
                background: "linear-gradient(#f9faf5, #e2e3df)",
              }}
            >
              Przewiń mnie w dół...
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
