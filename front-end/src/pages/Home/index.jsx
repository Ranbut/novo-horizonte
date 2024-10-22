import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import photo1 from '../../assets/photo-1.png'
import photo2 from '../../assets/photo-2.png'
import photo3 from '../../assets/photo-3.png'
import photo4 from '../../assets/photo-4.png'
import './style.css'

export default function Home() {
    return (
        <>
            <Navbar/>
                <div id="welcome" className="highlight">
                    <div className="cards">
                        <div className="card">
                            <h2 id="title">Bem-vindo a Novo Horizonte</h2>
                            <img src={photo1} alt="Entrance"/>
                        </div>
                        <div className="card">
                            <img src={photo2} alt="Entrance 2" />
                            <img src={photo3} alt="Entrance 3" />
                        </div>
                    </div>
                </div>
                <div id="specialties" className="highlight">
                    <img style={{width: "543px", height: "311px", marginTop: "30px"}} src={photo4} alt="Dentist" />
                    <div id="specialties-text">
                        <h4 id="specialties-text-title"><strong>Nossas Especialidades</strong></h4>
                        <div><strong>Dentista</strong> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  
                            quis orci nunc. Sed semper nulla non nisi tincidunt lacinia. Mauris  vitae 
                            felis lorem. Quisque condimentum, nisl vitae tincidunt congue, est  libero 
                            interdum sem, sit amet rhoncus diam ipsum quis dui.</div>
                        <button>Ver Mais</button>
                    </div>
                </div>
            <Footer/>
        </>
    );
  }
  