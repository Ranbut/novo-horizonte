import { Link } from "react-router-dom"
import './style.css'

export default function Navbar(){
    return(      
    <header className="navbar">
        <div className="navbar-options">
          <div className="navbar-option">
          <Link to="/">
            Inicío
          </Link>
          </div>
          <div className="navbar-option">
          <Link to="specialties">
            Especialidades
          </Link>
          </div>
          <div className="navbar-option">
          <Link to="locations">
            Centros de Saúde
          </Link>
          </div>
          <div className="navbar-option">
          <Link to="about-us">
            Sobre Nós
          </Link>
          </div>
        </div>
      </header>
      )
}