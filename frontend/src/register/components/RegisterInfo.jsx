import React from 'react';
import './RegisterInfo.css'

function RegisterInfo({ onRegisterClick }) {
  return (
    <div className="registerInfoContainer">
      <h2 className="formTitle">Jesteś tu pierwszy raz?</h2>

      <button
        className="registerButton"
        onClick={onRegisterClick}
      >
        Zarejestruj się
      </button>

      <div className="benefitsList">
        <h3>Zyskasz</h3>

        <div className="benefitItem">
          <p>Jako pierwszy dowiesz się o promocjach</p>
        </div>

        <div className="benefitItem">
          <p>Wygodne śledzenie statusu zamówień</p>
        </div>

        <div className="benefitItem">
          <p>Łatwy dostęp do historii zakupów i zapisanych projektów</p>
        </div>
      </div>
    </div>
  );
}


export default RegisterInfo;