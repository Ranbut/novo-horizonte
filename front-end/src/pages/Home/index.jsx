import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import photo1 from '../../assets/photo-1.png'
import photo2 from '../../assets/photo-2.png'
import photo3 from '../../assets/photo-3.png'
import photo4 from '../../assets/photo-4.png'

export default function Home() {
    return (
        <>
            <Navbar/>
                <WelcomeSection>
                    <CardsContainers>
                        <Card>
                            <TitleWelcome>Bem-vindo a Novo Horizonte</TitleWelcome>
                            <img src={photo1} alt="Entrance"/>
                        </Card>
                        <Card>
                            <img src={photo2} alt="Entrance 2" />
                            <img src={photo3} alt="Entrance 3" />
                        </Card>
                    </CardsContainers>
                </WelcomeSection>
                <SpecialtiesSection>
                    <img style={{width: "543px", height: "311px", marginTop: "30px"}} src={photo4} alt="Dentist" />
                    <SpecialtiesText>
                        <h4><strong>Nossas Especialidades</strong></h4>
                        <div><strong>Dentista</strong> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  
                            quis orci nunc. Sed semper nulla non nisi tincidunt lacinia. Mauris  vitae 
                            felis lorem. Quisque condimentum, nisl vitae tincidunt congue, est  libero 
                            interdum sem, sit amet rhoncus diam ipsum quis dui.</div>
                        <button>Ver Mais</button>
                    </SpecialtiesText>
                </SpecialtiesSection>
            <Footer/>
        </>
    );
  }

const WelcomeSection = styled.div`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    margin-top: 30px;
    img {
        width: 555px;
        height: 275px;
    }
  `;

const TitleWelcome = styled.h2`
    color: white;
    font-size: 40px;
    text-shadow: 0px 2px #000000;
`;

  const CardsContainers = styled.div`
    margin-top: 50px;
    margin-left: 13vw;
    display: flex;
    gap: 130px;
  `;

  const Card = styled.div`
    margin-top: 20px;
`;

const SpecialtiesSection = styled.div`
    display: flex;
    align-content: center;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-bottom: 30px;
    gap: 115px;
    text-align: center;
  `;

const SpecialtiesText = styled.div`
    font-size: 24px;
    width: 591px;

    h4 {
    font-size: 40px;
    }

    div {
    font-size: 24px;
    width: 591px;
    }

    button {
    margin-top: 17px;
    color: white;
    width: 281px;
    height: 56px;
    font-size: 24px;
    font-weight: 400;
    text-shadow: 0px 4px 4px #00000040;
    border: 2px solid #136084;
    border-radius: 10px;
    background-color: #136084;
    }
`;