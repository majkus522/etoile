import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import iconFavourite from "./assets/ulubione.png";
import iconLogo from "./assets/logo.png";
import iconSample from "./assets/Sample.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={iconLogo} alt="Logo" />
        </div>

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
          <link
            rel="stylesheet"
            href="font-awesome-4.6.3/css/font-awesome.min.css"
          ></link>
          <button className="nav-iconFav" onClick={() => console.log("Szukaj")}>
            <img src={iconFavourite} alt="Szukaj" className="nav-iconFav-img" />
          </button>
          <button className="nav-icon" onClick={() => console.log("Profil")}>
            
          </button>
        </div>
      </nav>

      <main className="main-content">
        <h1>Wyświetlarka to do</h1>
        <div className="card">
          <img src={iconSample} alt="Przykład" className="wyb-Sample-img" />
          <h2
            style={{
              fontFamily: "Belleza",
              fontWeight: "bold",
              color: "#000030",
            }}
          >
            CENA CAŁKOWITA
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
