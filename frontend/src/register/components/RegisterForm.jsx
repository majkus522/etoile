import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterInfo.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    acceptedRules: false,
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setError("");
  }

  function clearForm() {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      acceptedRules: false,
    });
  }

  function handleRegister(event) {
    event.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setError("Hasła nie są identyczne.");
      return;
    }

    if (!formData.acceptedRules) {
      setError("Musisz zaakceptować regulamin.");
      return;
    }

    const registerData = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    };

    console.log("Dane rejestracji:", registerData);

    // W przyszłości tutaj będzie wysłanie danych do backendu/bazy:
    // await fetch(...)

    clearForm();

    //navigate("/login");
  }

  return (
    <div className="registerFormContainer">
      <h2 className="formTitle">Jesteś tu pierwszy raz?</h2>

      <form onSubmit={handleRegister}>
        <div className="inputGroup">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="text"
            name="firstName"
            placeholder="Imię"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="text"
            name="lastName"
            placeholder="Nazwisko"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="password"
            name="password"
            placeholder="Hasło"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="password"
            name="repeatPassword"
            placeholder="Powtórz hasło"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
        </div>

        <label className="rulesCheckbox">
          <input
            type="checkbox"
            name="acceptedRules"
            checked={formData.acceptedRules}
            onChange={handleChange}
          />
          Akceptuję i rozumiem regulamin
        </label>

        {error && <p className="formError">{error}</p>}

        <button type="submit" className="registerButton">
          Załóż konto
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;