import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
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

  const styles = {
    page: {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "#f8f6f1",
      padding: "24px",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "#1f1f1f",
      boxSizing: "border-box",
      overflowY: "auto",
    },
    wrapper: {
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      paddingLeft: "28px",
      paddingRight: "28px",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "34px",
      fontWeight: 400,
      margin: "0 0 18px 0",
      color: "#1f1f1f",
      textAlign: "left",
      width: "100%",
      display: "block",
      fontFamily: "Georgia, serif",
    },
    box: {
      backgroundColor: "#f8f6f1",
      /*border: "1px solid #ebe7df",*/
      /*padding: "28px 28px 18px 28px",*/
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
      cursor: "pointer",
      userSelect: "none",
    },
    sectionLabel: {
      fontSize: "12px",
      letterSpacing: "0.28em",
      fontWeight: 600,
      color: "#6c665f",
    },
    arrowButton: {
      border: "none",
      background: "transparent",
      padding: 0,
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#6c665f",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      gap: "12px",
    },
    card: {
      minHeight: "110px",
      backgroundColor: "#fbfaf7",
      border: "1.5px solid #e6e0d6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      padding: "12px 10px",
      cursor: "pointer",
      boxSizing: "border-box",
    },
    cardActive: {
      border: "2px solid #0a1128",
      backgroundColor: "#f8f6f1",
    },
    circle: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      boxShadow:
        "inset 0 2px 4px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.08)",
    },
    name: {
      fontSize: "14px",
      color: "#2f2f2f",
      lineHeight: 1.2,
      textAlign: "center",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
    },
    bottomLine: {
      marginTop: "20px",
      borderTop: "1.5px solid #ddd7cc",
    },
    /*guziorki*/
    buttonsRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px",
      marginTop: "20px",
      width: "100%",
    },
    favoriteButton: {
      height: "60px",
      border: "2px solid #27314f",
      backgroundColor: "#f8f6f1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      boxSizing: "border-box",
      width: "100%",
    },
    cartButton: {
      height: "60px",
      backgroundColor: "#0a1128",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      boxSizing: "border-box",
      width: "100%",
    },
    favoriteIcon: {
      fontSize: "30px",
      color: "#1c2745",
      lineHeight: 1,
    },
    cartIcon: {
      fontSize: "22px",
      color: "#ffffff",
      lineHeight: 1,
    },
    favoriteText: {
      fontSize: "21px",
      fontWeight: 600,
      color: "#0f1838",
      lineHeight: 1,
    },
    cartText: {
      fontSize: "21px",
      fontWeight: 600,
      color: "#ffffff",
      lineHeight: 1,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Stwórz swój projekt</h1>

        <div style={styles.box}>
          <div style={styles.header} onClick={() => setIsOpen((prev) => !prev)}>
            <span style={styles.sectionLabel}>METAL</span>

            <button type="button" style={styles.arrowButton} aria-label="Rozwiń lub zwiń">
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
              <div style={styles.grid}>
                {materials.map((material) => {
                  const isActive = selectedMaterial === material.id;

                  return (
                    <div
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      style={{
                        ...styles.card,
                        ...(isActive ? styles.cardActive : {}),
                      }}
                    >
                      <div
                        style={{
                          ...styles.circle,
                          background: material.gradient,
                        }}
                      />
                      <span style={styles.name}>{material.name}</span>
                    </div>
                  );
                })}
              </div>

              <div style={styles.bottomLine} />
            </>
          )}
        </div>
        <div style={styles.buttonsRow}>
          <div style={styles.favoriteButton}>
            <span style={styles.favoriteIcon}>♡</span>
            <span style={styles.favoriteText}>Ulubione</span>
          </div>

          <div style={styles.cartButton}>
            <span style={styles.cartIcon}>□</span>
            <span style={styles.cartText}>Dodaj do koszyka</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;