import { useState } from "react"
import LoginForm from "./components/LoginForm"
import RegisterInfo from "./components/RegisterInfo"
import RegisterForm from "./components/RegisterForm"
import Navbar from "./components/Navbar"
import './App.css'

export default function App(){
const [showRegisterForm, setShowRegisterForm] = useState(false);

	return(
		<div className="appContainer"> 
          <Navbar />
          <main className="splitScreen">
            <section className="loginSide">
              <LoginForm />
            </section>
            <section className="registerSide">
              {showRegisterForm ? (
            <RegisterForm />
          ) : (
            <RegisterInfo onRegisterClick={() => setShowRegisterForm(true)} />
          )}
            </section>
          </main>
        </div>
	);	
}