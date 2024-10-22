import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import "./style.css"
import photo5 from "../../assets/photo-5.png"

export default function AboutUs() {
    return(
        <>
            <Navbar/>
                <div id="welcome" className="highlight">
                <h2 id="title">Sobre nós</h2>
                    <div className="cards">
                        <div id="main-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            dapibus mollis ex quis faucibus. In condimentum, nisl a posuere feugiat,
                            nisl magna imperdiet odio, auctor feugiat metus sem sit amet lorem.  
                            Etiam hendrerit luctus erat sit amet porttitor. Lorem ipsum dolor sit  amet,
                            consectetur adipiscing elit. Fusce id molestie leo. Nam mollis quam euismod, ornare 
                            lorem eget,  ornare arcu. Vestibulum libero dui, tempus et volutpat et, pellentesque  
                            eu tortor. Proin vehicula ipsum eu lacinia interdum. Morbi faucibus  tortor odio, non 
                            vestibulum justo pretium eu. Suspendisse congue ipsum  sed mi finibus facilisis.
                            Vestibulum commodo posuere sagittis. Praesent tristique libero odio, nec malesuada urna tristique ac.
                        </div>
                        <img src={photo5} alt="Team" />
                    </div>
                </div>
                <div id="why-section">
                    <div className="why-section-box">
                        <h4 id="why-title"><strong>Por quê escolher a Novo Horizonte</strong></h4>
                        <div className="why-text">Etiam mauris eros, accumsan id diam  sed, consectetur dignissim orci. Donec faucibus magna lorem, non mattis 
                        justo malesuada sed. Vivamus faucibus nisl in mi aliquam dictum. 
                        Phasellus volutpat orci id risus dignissim accumsan. Phasellus fermentum dolor non erat fermentum fringilla. 
                        Nulla ut mauris a lacus porttitor malesuada et ac justo.</div>
                    </div>
                    <div className="why-section-box">
                        <div className="why-text">Duis ac pulvinar mauris. Aenean eget dolor eget velit imperdiet pharetra  nec in quam. Praesent congue commodo nisi, 
                        a aliquam enim ornare eget.  Aliquam convallis convallis libero sit amet scelerisque. 
                        Morbi pellentesque vestibulum odio in condimentum.</div>
                    <button>Veja os centros de saúde que temos.</button>
                    </div>
                </div>
            <Footer/>
        </>
    )
}