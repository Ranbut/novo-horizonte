import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import photo5 from "../../assets/photo-5.png"

export default function AboutUs() {
    return(
        <>
            <Navbar/>
                <HistorySection>
                    <HistoryTitle>Sobre nós</HistoryTitle>
                    <HistoryContainer>
                        <HistoryText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            dapibus mollis ex quis faucibus. In condimentum, nisl a posuere feugiat,
                            nisl magna imperdiet odio, auctor feugiat metus sem sit amet lorem.  
                            Etiam hendrerit luctus erat sit amet porttitor. Lorem ipsum dolor sit  amet,
                            consectetur adipiscing elit. Fusce id molestie leo. Nam mollis quam euismod, ornare 
                            lorem eget,  ornare arcu. Vestibulum libero dui, tempus et volutpat et, pellentesque  
                            eu tortor. Proin vehicula ipsum eu lacinia interdum. Morbi faucibus  tortor odio, non 
                            vestibulum justo pretium eu. Suspendisse congue ipsum  sed mi finibus facilisis.
                            Vestibulum commodo posuere sagittis. Praesent tristique libero odio, nec malesuada urna tristique ac.
                        </HistoryText>
                        <img src={photo5} alt="Team" />
                    </HistoryContainer>
                </HistorySection>
                <WhySection>
                    <WhyContainer>
                        <WhyTitle><strong>Por quê escolher a Novo Horizonte</strong></WhyTitle>
                        <WhyText>Etiam mauris eros, accumsan id diam  sed, consectetur dignissim orci. Donec faucibus magna lorem, non mattis 
                        justo malesuada sed. Vivamus faucibus nisl in mi aliquam dictum. 
                        Phasellus volutpat orci id risus dignissim accumsan. Phasellus fermentum dolor non erat fermentum fringilla. 
                        Nulla ut mauris a lacus porttitor malesuada et ac justo.</WhyText>
                    </WhyContainer>
                    <WhyContainer>
                        <WhyText>Duis ac pulvinar mauris. Aenean eget dolor eget velit imperdiet pharetra  nec in quam. Praesent congue commodo nisi, 
                        a aliquam enim ornare eget.  Aliquam convallis convallis libero sit amet scelerisque. 
                        Morbi pellentesque vestibulum odio in condimentum.</WhyText>
                        <button>Veja os centros de saúde que temos.</button>
                    </WhyContainer>
                </WhySection>
            <Footer/>
        </>
    )
}

const HistorySection = styled.div`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    margin-top: 30px;
    img {
        width: 555px;
        height: 275px;
    }
`;

const HistoryTitle = styled.h1`
    text-align: center;
`;

const HistoryContainer = styled.h2`
    margin-top: 50px;
    margin-left: 13vw;
    display: flex;
    gap: 130px;
`;

const HistoryText = styled.div`
    color: white;
    text-shadow: 0px 2px #000000;
    font-size: 24px;
    width: 671px;
    height: 375px;
`;

const WhySection = styled.div`
    text-align: center;
    margin-left: 20vw;
    margin-right: 20vw;
    display: flex;
`;

const WhyContainer = styled.div`

`;

const WhyTitle = styled.div`
    font-size: 40px;
`;

const WhyText = styled.div`
    width: 591px;
    height: 196px;
    text-shadow: 0px 2px #0000003f;
    font-size: 24px;
`;