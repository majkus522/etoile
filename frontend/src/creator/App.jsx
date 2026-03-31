import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const materials = [
  { id: 1, name: "Złoto żółte", class: "gold-yellow" },
  { id: 2, name: "Złoto białe", class: "gold-white" },
  { id: 3, name: "Złoto różowe", class: "gold-rose" },
  { id: 4, name: "Platyna", class: "platinum" },
  { id: 5, name: "Srebro", class: "silver" },
];

function App() {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(true);

  return (
    <div className="wrapper">
      <h1 className="title">Wybieracz materiału</h1>

      <div className="box">
        <div className="box-header" onClick={() => setOpen(!open)}>
          <span className="section">METAL</span>
          <span className={`arrow ${open ? "open" : ""}`}>⌃</span>
        </div>

        {open && (
          <>
            <div className="grid">
              {materials.map((m) => (
                <div
                  key={m.id}
                  className={`card ${selected === m.id ? "active" : ""}`}
                  onClick={() => setSelected(m.id)}
                >
                  <div className={`circle ${m.class}`} />
                  <span>{m.name}</span>
                </div>
              ))}
            </div>

            <div className="line" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
