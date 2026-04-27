import { useState } from 'react'
import './App.css'

const materials = [
  {
    id: 1,
    name: "Złoto żółte",
    gradient: "radial-gradient(circle at 30% 30%, #f6e08d 0%, #d4af37 72%)",
  },
  {
    id: 2,
    name: "Złoto białe",
    gradient: "radial-gradient(circle at 30% 30%, #ffffff 0%, #dfdfdf 72%)",
  },
  {
    id: 3,
    name: "Złoto różowe",
    gradient: "radial-gradient(circle at 30% 30%, #efc1bc 0%, #d7938c 72%)",
  },
  {
    id: 4,
    name: "Platyna",
    gradient: "radial-gradient(circle at 30% 30%, #b9dbe7 0%, #94d0f5 72%)",
  },
  {
    id: 5,
    name: "Srebro",
    gradient: "radial-gradient(circle at 30% 30%, #e9e9e9 0%, #b7b7b7 72%)",
  },
];

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="creator-page">
      <div className="creator-wrapper">
        <h1 className="creator-title">Stwórz swój projekt</h1>

        <div className="creator-box">
          <div className="creator-header" onClick={() => setIsOpen((prev) => !prev)}>
            <span className="creator-section-label">METAL</span>

            <button type="button" className="creator-arrow-button" aria-label="Rozwiń lub zwiń">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.4s ease",
                }}
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <>
              <div className="creator-grid">
                {materials.map((material) => {
                  const isActive = selectedMaterial === material.id;

                  return (
                    <div
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`creator-card ${isActive ? "creator-card-active" : ""}`}
                    >
                      <div
                        className="creator-circle"
                        style={{ background: material.gradient }}
                      />

                      <span className="creator-name">{material.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="creator-bottom-line" />
            </>
          )}
        </div>
        <div className="creator-buttons-row">
          <button className="creator-favorite-button">
            <span className="creator-favorite-icon">♡</span>
            <span className="creator-favorite-text">Ulubione</span>
          </button>

          <button className="creator-cart-button">
            <span className="creator-cart-icon">□</span>
            <span className="creator-cart-text">Dodaj do koszyka</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;