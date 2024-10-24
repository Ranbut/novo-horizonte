import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import clinic1 from '../../assets/photo-6.png'
import clinic2 from '../../assets/photo-2.png'


export default function Locations() {
    return(
        <>
            <Navbar/>
            <ClinicSectionI>
                <Title>Unidade I</Title>
                <ClinicContainer>
                    <TextContainer>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque quis orci nunc. Sed semper nulla non nisi tincidunt lacinia. 
                            Mauris vitae felis lorem. Quisque condimentum, nisl vitae tincidunt congue, est 
                            libero interdum sem, sit amet rhoncus diam ipsum quis dui.
                        </Text>
                        <Text>
                            Donec ultrices et sapien non sollicitudin. Maecenas faucibus id massa  sed ultricies. 
                            Morbi sodales eu nunc vel molestie. Nullam facilisis sed  lacus facilisis fringilla. 
                            Sed eget metus quam. Suspendisse laoreet nisi  et nisl elementum, eu mollis ipsum fringilla.
                        </Text>
                    </TextContainer>
                    <Image src={clinic1} alt="Unidade I"/>
                </ClinicContainer>
            </ClinicSectionI>
            <ClinicSectionII>
                <Title>Unidade II</Title>
                <ClinicContainer>
                    <Image src={clinic2} alt="Unidade II"/>
                    <TextContainer>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque quis orci nunc. Sed semper nulla non nisi tincidunt lacinia. 
                            Mauris vitae felis lorem. Quisque condimentum, nisl vitae tincidunt congue, est 
                            libero interdum sem, sit amet rhoncus diam ipsum quis dui.
                        </Text>
                        <Text>
                            Donec ultrices et sapien non sollicitudin. Maecenas faucibus id massa  sed ultricies. 
                            Morbi sodales eu nunc vel molestie. Nullam facilisis sed  lacus facilisis fringilla. 
                            Sed eget metus quam. Suspendisse laoreet nisi  et nisl elementum, eu mollis ipsum fringilla.
                        </Text>
                    </TextContainer>
                </ClinicContainer>
            </ClinicSectionII>
            <Footer/>
        </>
    )
}

const ClinicSectionI = styled.div`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    margin-top: 30px;
    text-align: center;
    color: white;
`;

const ClinicContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20vw;
    margin-right: 20vw;
    gap: 167px;
`;

const Title = styled.h1`
    padding-top: 21px;
`;

const TextContainer = styled.div`
    width: 591px;
    margin-bottom: 95px;
`;

const Text = styled.p`

`;

const Image = styled.img`
    width: 486px;
    height: 306px;
    margin-bottom: 97px;
`;

const ClinicSectionII = styled.div`
    text-align: center;
`;