import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import photo1 from '../../assets/photo-4.png'

export default function Specialties() {
    return(
        <>
            <Navbar/>
            <SpecialtiesBodySection>
                <Title>Especialidades</Title>
                <SpecialtiesSection>
                    <ClinicsContainer>
                        <ClinicContainer>
                            <ClinicTitle>Unidade I</ClinicTitle>
                            <ClinicSpecialties>
                                <li>Clínica Geral</li>
                                <li>Dermatologia</li>
                                <li>Endocrinologia</li>
                                <li>Geriatria</li>
                                <li>Mastologia</li>
                                <li>Otorrinolaringologia</li>
                                <li>Pneumologia</li>
                                <li>Psiquiatria</li>
                                <li>Reumatologia</li>
                                <li>Urologia</li>
                                <li>Cardiologia</li>
                                <li>Ginecologia e Obstetrícia</li>
                                <li>Pediatria</li>
                                <li>Ortopedia</li>
                                <li>Odontologia</li>
                                <li>Assistência Farmacêutica</li>
                                <li>Farmácia Clínica</li>
                                <li>Fisioterapia</li>
                                <li>Dentista</li>
                            </ClinicSpecialties>
                        </ClinicContainer>
                        <ClinicContainer>
                            <ClinicTitle>Unidade II</ClinicTitle>
                            <ClinicSpecialties>
                                <li>Clínica Geral</li>
                                <li>Dermatologia</li>
                                <li>Endocrinologia</li>
                                <li>Geriatria</li>
                                <li>Mastologia</li>
                                <li>Otorrinolaringologia</li>
                                <li>Pneumologia</li>
                                <li>Psiquiatria</li>
                                <li>Reumatologia</li>
                                <li>Urologia</li>
                                <li>Neurologia</li>
                                <li>Cardiologia</li>
                                <li>Nefrologia</li>
                                <li>Oftalmologia</li>
                                <li>Ginecologia e Obstetrícia</li>
                                <li>Dentista</li>
                                <li>Pediatria</li>
                                <li>Ortopedia</li>
                                <li>Odontologia</li>
                                <li>Assistência Farmacêutica</li>
                                <li>Farmácia Clínica</li>
                                <li>Fisioterapia</li>
                            </ClinicSpecialties>
                        </ClinicContainer>
                    </ClinicsContainer>
                    <SpecialtyContainer>
                        <SpecialtyImage src={photo1} alt="Dentist" />
                        <SpecialtyDescription>
                            Dentista ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque  quis orci nunc. Sed semper nulla non nisi tincidunt lacinia. 
                            Mauris  vitae felis lorem. Quisque condimentum, nisl vitae tincidunt congue, 
                            est libero interdum sem, sit amet rhoncus diam ipsum quis dui.
                        </SpecialtyDescription>
                        <SpecialtyDescription>
                            Donec ultrices et sapien non sollicitudin. Maecenas faucibus id massa  sed ultricies. 
                            Morbi sodales eu nunc vel molestie. Nullam facilisis sed  lacus facilisis fringilla. 
                            Sed eget metus quam. Suspendisse laoreet nisi  et nisl elementum, eu mollis ipsum fringilla
                        </SpecialtyDescription>
                        <SpecialtyValue>Valor da Consulta:</SpecialtyValue>
                        <SpecialtyValue>R$ 15,00</SpecialtyValue>
                    </SpecialtyContainer>
                </SpecialtiesSection>
                <MoreAbout>Clique em uma das especialidades para mais detalhes.</MoreAbout>
                </SpecialtiesBodySection>
            <Footer/>
        </>
    )
}

const SpecialtiesBodySection = styled.div`
    color: white;
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    margin-top: 30px;
    padding-bottom: 46px;
    margin-bottom: 39px;
`;

const Title = styled.h1`
    padding-top: 21px;
    text-align: center;
`;

const SpecialtiesSection = styled.div`
    display: flex;
    gap: 194px;
    margin-left: 15vw;
    margin-right: 15vw;
`;

const ClinicsContainer = styled.div`
    margin-left: 28px;
    text-align: center;
    display: flex;
    gap: 28px;
`;

const ClinicContainer = styled.div`

`;

const ClinicTitle = styled.h2`

`;

const ClinicSpecialties = styled.ul`
    li{
        &:hover{
        color: #50F4FF;
    }
    cursor: pointer;
    }
`;

const SpecialtyContainer = styled.div`
    text-align: center;
`;

const SpecialtyImage = styled.img`
    width: 486px;
    height: 306px;
`;

const SpecialtyDescription = styled.div`
    width: 591px;
`;

const SpecialtyValue = styled.h2`
`;

const MoreAbout = styled.h2`
    margin-left: 15vw;
    margin-right: 15vw;
`;