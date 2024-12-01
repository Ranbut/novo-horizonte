import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../Footer";
import generalClinicPhoto from '../../assets/medics/clinico-geral.jpg';
import dermatologyPhoto from '../../assets/medics/dermatologia.jpg';
import endocrinologyPhoto from '../../assets/medics/endocrionologista.jpg';
import geriatricsPhoto from '../../assets/medics/geriatra.jpg';
import mastologyPhoto from '../../assets/medics/mastologista.jpg';
import otorhinolaryngologyPhoto from '../../assets/medics/otorrinolaringologia.jpg';
import pulmonologyPhoto from '../../assets/medics/pneumologia.jpg';
import psychiatryPhoto from '../../assets/medics/psiquiatria.jpg';
import rheumatologyPhoto from '../../assets/medics/reumatologista.jpg';
import urologyPhoto from '../../assets/medics/urologia.jpg';
import neurologyPhoto from '../../assets/medics/neurologia.jpg';
import cardiologyPhoto from '../../assets/medics/cardiologia.jpg';
import nephrologyPhoto from '../../assets/medics/nefrologista.jpeg';
import ophthalmologyPhoto from '../../assets/medics/oftalmologista.jpg';
import gynecologyObstetricsPhoto from '../../assets/medics/ginecologia-e-obstetricia.jpg';
import dentistryPhoto from '../../assets/photo-4.png';
import pediatricsPhoto from '../../assets/medics/pediatra.jpg';
import orthopedicsPhoto from '../../assets/medics/ortopedia.jpg';
import odontologyPhoto from '../../assets/medics/odontologia.jpeg';
import pharmaceuticalAssistancePhoto from '../../assets/medics/assistencia-farmaceutica.jpg';
import clinicalPharmacyPhoto from '../../assets/medics/farmacia-clinica.jpg';
import physiotherapyPhoto from '../../assets/medics/fisioterapia.jpg';
import { useState } from "react";

export default function Specialties() {
    const [specialtyId, setSpecialtyId] = useState("GeneralClinic");
    const [specialty, setSpecialty] = useState(
        { 
            id: "GeneralClinic",
            description: [
                "O clínico geral é um profissional da medicina com especialização em clínica geral ou medicina interna – como é conhecida também – com um vasto conhecimento geral sobre o funcionamento do corpo humano, conhece os órgãos, aparelhos e sistemas profundamente, sendo responsável por servir as pessoas, ajudando-as na prevenção e cura de doenças.",
                "Normalmente, é o primeiro médico que as pessoas consultam quando estão com algum problema e não sabem para qual profissional especializado devem ir para a investigação, logo o clínico geral deve ter conhecimento para não encaminhar problemas simples para outras especialidades, assim evita-se exames desnecessários, mas caso precise é ele o responsável pelo encaminhamento para outras especialidades."
                ],
            value: 30,
            photo: generalClinicPhoto
        }
    );

    const specialties = [
        { 
            id: "GeneralClinic",
            description: [
                "O clínico geral é um profissional da medicina com especialização em clínica geral ou medicina interna – como é conhecida também – com um vasto conhecimento geral sobre o funcionamento do corpo humano, conhece os órgãos, aparelhos e sistemas profundamente, sendo responsável por servir as pessoas, ajudando-as na prevenção e cura de doenças.",
                 "Normalmente, é o primeiro médico que as pessoas consultam quando estão com algum problema e não sabem para qual profissional especializado devem ir para a investigação, logo o clínico geral deve ter conhecimento para não encaminhar problemas simples para outras especialidades, assim evita-se exames desnecessários, mas caso precise é ele o responsável pelo encaminhamento para outras especialidades."
                ],
            value: 30,
            photo: generalClinicPhoto
        },
        { 
            id: "Dermatology",
            description: [
                "O dermatologista é o médico especialista no diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas, cabelos e unhas. São mais de 3 mil doenças dermatológicas que afetam a pele de crianças, adultos e idosos.",
                "O dermatologista atua no diagnóstico, prevenção e tratamento de doenças, além de orientar sobre cuidados gerais, solucionar problemas estéticos e trabalhar na manutenção da beleza da pele. Veja algumas doenças que os dermatologistas tratam: acne (espinhas), alergias, vitiligo, psoríase, queda de cabelos, hanseníase (lepra) e câncer da pele."
            ],
            value: 105,
            photo: dermatologyPhoto
        },
        { 
            id: "Endocrinology",
            description: [
                "A função do médico endocrinologista é diagnosticar e tratar doenças relacionadas com distúrbios hormonais e metabólicos. Esse profissional costuma atender em consultórios, contudo, ele pode atuar ainda em ambulatórios e unidades de internação, além de laboratórios de hormônios, patologia, e radioimunensaio.",
                "A endocrinologia trata doenças muito predominantes, como a diabetes e a obesidade. Elas podem estar relacionadas a hormônios que são produzidos em excesso ou em quantidade insuficiente. Assim, essa especialidade médica é importante não só para o tratamento das doenças, como também auxilia na prevenção das mesmas."
            ],
            value: 150,
            photo: endocrinologyPhoto
        },
        { 
            id: "Geriatrics",
            description: [
                "Médicos geriatras utilizam uma abordagem ampla para a avaliação clínica, incluindo avaliação da funcionalidade, vulnerabilidade sócio-familiar, cognição, humor, mobilidade (ou vitalidade), comunicação e iatrogenias, que podem resultar na síndrome de fragilidade e perda de autonomia e independência. Por isso, a consulta geriátrica é, em geral, mais demorada.",
                "Além de lidar com doenças como as demências, a hipertensão arterial, o diabetes e a osteoporose, o geriatra também trata de problemas com múltiplas causas, como tonturas, incontinência urinária e tendência a quedas. Ele também fornece cuidados paliativos aos pacientes portadores de doenças sem possibilidade de cura."
            ],
            value: 200,
            photo: geriatricsPhoto
        },
        { 
            id: "Mastology",
            description: [
                "O mastologista é o médico com especialização em estudar, prevenir, diagnosticar e tratar doenças ou alterações das mamas, ou relacionadas a elas. Este profissional é responsável por promover e executar os meios terapêuticos (cirúrgicos, reparadores e clínicos) necessários para o tratamento ou prevenção dessas doenças."
            ],
            value: 150,
            photo: mastologyPhoto
        },
        { 
            id: "Otorhinolaryngology",
            description: [
                "O otorrinolaringologista é um médico especializado no diagnóstico, tratamento e prevenção de doenças e distúrbios relacionados aos ouvidos, o nariz e estruturas dentro do pescoço (como garganta e cordas vocais).",
                "Trata-se de um profissional bastante completo que pode cuidar desde sangramentos nasais simples até do tratamento de um câncer em uma dessas regiões, além de realizar cirurgias.  "
            ],
            value: 109,
            photo: otorhinolaryngologyPhoto
        },
        { 
            id: "Pulmonology",
            description: [
                "O pneumologista é o médico responsável por cuidar e tratar dos pulmões. Ou seja, realiza o diagnóstico e tratamento das chamadas doenças pulmonares, como a pneumonia e o câncer de pulmão. Além disso, este médico acompanha quadros médicos de seus pacientes, auxiliando na prevenção dessas doenças."
            ],
            value: 149,
            photo: pulmonologyPhoto
        },
        { 
            id: "Psychiatry",
            description: [
                "Um psiquiatra é um profissional da área da saúde mental que se dedica ao estudo, diagnóstico, tratamento e prevenção de transtornos psiquiátricos, através de um conhecimento aprofundado da mente humana e suas complexidades.",
                "Além disso, os psiquiatras são especialistas em prescrever e monitorar medicamentos psicotrópicos, quando necessário, a fim de ajudar os pacientes a encontrar um equilíbrio mental saudável."
            ],
            value: 180,
            photo: psychiatryPhoto
        },
        { 
            id: "Rheumatology",
            description: [
                "O reumatologista é um médico especialista em diagnosticar e tratar doenças que afetam o aparelho locomotor, como ossos, articulações, músculos, tendões, ligamentos, bursas, entre outros. Ele também pode tratar doenças que afetam órgãos e sistemas como o coração, os olhos, a pele e os pulmões.",
                "É também responsavel em ajudar a minimizar sintomas como: Inflamação, Dores nas articulações, Rigidez na musculatura."
            ],
            value: 129,
            photo: rheumatologyPhoto
        },
        { 
            id: "Urology",
            description: [
                "Um urologista é um médico especialista no sistema geniturinário, que inclui os rins, bexiga, uretra e órgãos reprodutivos masculinos. Ele atua na prevenção, diagnóstico, tratamento e acompanhamento de doenças que afetam esses órgãos, tanto em homens quanto em mulheres.",
                "Para tratar as doenças, o urologista pode solicitar exames como ultrassom de vias urinárias, tomografia de abdômen e de pelve, e exames de sangue e de urina."
            ],
            value: 150,
            photo: urologyPhoto
        },
        { 
            id: "Neurology",
            description: [
                "O neurologista é o especialista que avalia, diagnostica e trata distúrbios neurológicos, ou seja, que afetam o cérebro e o sistema nervoso central e nervos.",
                "Portanto, o médico neurologista se especializa em tratar doenças relacionadas ao sistema nervoso central, indicando os medicamentos e tratamentos mais adequados para cada caso."
            ],
            value: 160,
            photo: neurologyPhoto
        },
        { 
            id: "Cardiology",
            description: [
                "O cardiologista é o médico especialista na saúde do coração e dos vasos sanguíneos.",
                "Portanto, o profissional identifica alterações no sistema cardiovascular, contribui com a prevenção de doenças e indica o tratamento adequado de forma individual."
            ],
            value: 140,
            photo: cardiologyPhoto
        },
        { 
            id: "Nephrology",
            description: ["Nefrologia é uma especialidade médica, dentro da clínica médica, que existe desde a década de 60 no Brasil, nos Estados Unidos e em outros países. Ela foi criada para que um clínico geral se especializasse e cuidasse das doenças renais.",
                "O nefrologista é o médico habilitado para prestar suporte de substituição renal em casos de função renal prejudicada, prestar suporte renal artificial (hemodiálise ou diálise peritoneal), participar no processo de transplante renal."
            ],
            value: 140,
            photo: nephrologyPhoto
        },
        { 
            id: "Ophthalmology",
            description: ["A oftalmologia é uma especialidade da medicina que estuda e trata as doenças relacionadas ao olho, à refração e aos olhos e seus anexos.",
                "O oftalmologista é um médico especializado na saúde dos olhos, que diagnostica e trata problemas de visão, além de realizar cirurgias. Ele é capaz de identificar doenças comuns, como miopia, hipermetropia, astigmatismo e presbiopia, e complicações mais graves, como catarata, glaucoma, retinopatia, tumores e doenças do nervo ótico."
            ],
            value: 200,
            photo: ophthalmologyPhoto
        },
        { 
            id: "GynecologyObstetrics",
            description: [
                "O ginecologista é o médico responsável pelo cuidado e estudo do aparelho reprodutor feminino. Assim, cuidando da saúde da mulher como um todo, mas com maior foco em seu aparelho reprodutor. Ele pode acompanhar a gestação, cuidando da saúde tanto da mãe, quanto do bebê.",
                "A Obstetrícia serve para acompanhar o desenvolvimento da gestação, diagnosticar e tratar possíveis complicações, orientar sobre os cuidados necessários durante a gravidez, preparar a mulher para o parto e oferecer suporte emocional e físico durante todo o processo."
            ],
            value: 200,
            photo: gynecologyObstetricsPhoto
        },
        { 
            id: "Dentistry",
            description: [
                "O dentista é o profissional responsável por diagnosticar, prevenir e tratar problemas relacionados à saúde bucal. Ele realiza procedimentos como limpeza, extração, restauração e tratamento de cáries, além de orientar sobre cuidados diários e higiene dental. Seu objetivo é promover a saúde dos dentes e gengivas em todas as fases da vida."
            ],
            value: 120,
            photo: dentistryPhoto
        },
        { 
            id: "Pediatrics",
            description: [
                "Pediatria é a especialidade da Medicina dedicada ao cuidado da saúde de crianças, pré-adolescentes e adolescentes. Sua atuação inclui a prevenção e tratamento de doenças desde o nascimento até a fase adulta.",
                "O pediatra, tem também a função orientar as famílias sobre questões como alimentação, aleitamento materno, vacinação e prevenção de acidentes."
            ],
            value: 190,
            photo: pediatricsPhoto
        },
        { 
            id: "Orthopedics",
            description: [
                "Médico ortopedista é um especialista na função mecânica do aparelho locomotor.",
                "Isso significa que esse profissional é apto a estudar, avaliar, diagnosticar e tratar alterações que afetam articulações, tendões, ossos, músculos, ligamentos e cartilagens."
            ],
            value: 140,
            photo: orthopedicsPhoto
        },
        { 
            id: "Odontology",
            description: [
                "O Odontologista é o profissional responsável por diagnosticar, prevenir e tratar problemas relacionados à saúde bucal. Ele realiza procedimentos como limpeza, extração, restauração e tratamento de cáries, além de orientar sobre cuidados diários e higiene dental. Seu objetivo é promover a saúde dos dentes e gengivas em todas as fases da vida."
            ],
            value: 120,
            photo: odontologyPhoto
        },
        { 
            id: "PharmaceuticalAssistance",
            description: [
                "O profissional visa orientar, promover, proteger e recuperar a saúde, por meio do acesso e do uso racional de medicamentos"
            ],
            value: 0,
            photo: pharmaceuticalAssistancePhoto
        },
        { 
            id: "ClinicalPharmacy",
            description: [
                "A farmácia clínica é uma área da farmácia que visa o uso racional de medicamentos, com o objetivo de: Promover saúde e bem-estar, Prevenir doenças, Otimizar a farmacoterapia.",
                "O farmacêutico clínico atua prestando cuidados ao paciente, identificando sinais e sintomas, e orientando sobre o uso correto dos medicamentos."
            ],
            value: 0,
            photo: clinicalPharmacyPhoto
        },
        { 
            id: "Physiotherapy",
            description: [
            "O fisioterapeuta é o profissional responsável por prevenir, diagnosticar e tratar problemas relacionados às funções e aos movimentos do corpo. Para entender melhor o que faz um fisioterapeuta, não é raro que pessoas que sofreram acidentes ou que apresentam vícios de postura sejam encaminhadas ao profissional.",
            "Este, por sua vez, a partir da aplicação de terapias, de exercícios adequados e da utilização de aparelhos como ultrassom e biofeedback, é capaz de contornar uma série de problemas e distúrbios e reabilitar o organismo para que ele se torne mais funcional no dia a dia. Assim, o paciente pode obter benefícios relacionados à qualidade de vida e autonomia."
            ],
            value: 80,
            photo: physiotherapyPhoto
        }
    ];

    function selectSpecialty(specialtyId){
        setSpecialtyId(specialtyId);
        const selectedSpecialty = specialties.find(specialty => specialty.id === specialtyId);
        setSpecialty(selectedSpecialty);
    }

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
                                <ClinicSpecialty onClick={() => {selectSpecialty("GeneralClinic")}} isSelected={specialtyId === "GeneralClinic"}>Clínica Geral</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Dermatology")}} isSelected={specialtyId === "Dermatology"}>Dermatologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Endocrinology")}} isSelected={specialtyId === "Endocrinology"}>Endocrinologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Geriatrics")}} isSelected={specialtyId === "Geriatrics"}>Geriatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Mastology")}} isSelected={specialtyId === "Mastology"}>Mastologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Otorhinolaryngology")}} isSelected={specialtyId === "Otorhinolaryngology"}>Otorrinolaringologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Pulmonology")}} isSelected={specialtyId === "Pulmonology"}>Pneumologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Psychiatry")}} isSelected={specialtyId === "Psychiatry"}>Psiquiatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Rheumatology")}} isSelected={specialtyId === "Rheumatology"}>Reumatologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Urology")}} isSelected={specialtyId === "Urology"}>Urologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Cardiology")}} isSelected={specialtyId === "Cardiology"}>Cardiologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("GynecologyObstetrics")}} isSelected={specialtyId === "GynecologyObstetrics"}>Ginecologia e Obstetrícia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Pediatrics")}} isSelected={specialtyId === "Pediatrics"}>Pediatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Orthopedics")}} isSelected={specialtyId === "Orthopedics"}>Ortopedia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Odontology")}} isSelected={specialtyId === "Odontology"}>Odontologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("PharmaceuticalAssistance")}} isSelected={specialtyId === "PharmaceuticalAssistance"}>Assistência Farmacêutica</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("ClinicalPharmacy")}} isSelected={specialtyId === "ClinicalPharmacy"}>Farmácia Clínica</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Physiotherapy")}} isSelected={specialtyId === "Physiotherapy"}>Fisioterapia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Dentistry")}} isSelected={specialtyId === "Dentistry"}>Dentista</ClinicSpecialty>
                            </ClinicSpecialties>
                        </ClinicContainer>
                        <ClinicContainer>
                            <ClinicTitle>Unidade II</ClinicTitle>
                            <ClinicSpecialties>
                                <ClinicSpecialty onClick={() => {selectSpecialty("GeneralClinic")}} isSelected={specialtyId === "GeneralClinic"}>Clínica Geral</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Dermatology")}} isSelected={specialtyId === "Dermatology"}>Dermatologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Endocrinology")}} isSelected={specialtyId === "Endocrinology"}>Endocrinologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Geriatrics")}} isSelected={specialtyId === "Geriatrics"}>Geriatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Mastology")}} isSelected={specialtyId === "Mastology"}>Mastologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Otorhinolaryngology")}} isSelected={specialtyId === "Otorhinolaryngology"}>Otorrinolaringologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Pulmonology")}} isSelected={specialtyId === "Pulmonology"}>Pneumologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Psychiatry")}} isSelected={specialtyId === "Psychiatry"}>Psiquiatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Rheumatology")}} isSelected={specialtyId === "Rheumatology"}>Reumatologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Urology")}} isSelected={specialtyId === "Urology"}>Urologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Neurology")}} isSelected={specialtyId === "Neurology"}>Neurologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Cardiology")}} isSelected={specialtyId === "Cardiology"}>Cardiologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Nephrology")}} isSelected={specialtyId === "Nephrology"}>Nefrologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Ophthalmology")}} isSelected={specialtyId === "Ophthalmology"}>Oftalmologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("GynecologyObstetrics")}} isSelected={specialtyId === "GynecologyObstetrics"}>Ginecologia e Obstetrícia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Dentistry")}} isSelected={specialtyId === "Dentistry"}>Dentista</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Pediatrics")}} isSelected={specialtyId === "Pediatrics"}>Pediatria</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Orthopedics")}} isSelected={specialtyId === "Orthopedics"}>Ortopedia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Odontology")}} isSelected={specialtyId === "Odontology"}>Odontologia</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("PharmaceuticalAssistance")}} isSelected={specialtyId === "PharmaceuticalAssistance"}>Assistência Farmacêutica</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("ClinicalPharmacy")}} isSelected={specialtyId === "ClinicalPharmacy"}>Farmácia Clínica</ClinicSpecialty>
                                <ClinicSpecialty onClick={() => {selectSpecialty("Physiotherapy")}} isSelected={specialtyId === "Physiotherapy"}>Fisioterapia</ClinicSpecialty>
                            </ClinicSpecialties>
                        </ClinicContainer>
                    </ClinicsContainer>
                    <SpecialtyContainer>
                        <SpecialtyImage src={specialty.photo} alt="Dentist" />
                        <SpecialtyDescription>
                            {specialty.description[0]}
                        </SpecialtyDescription>
                        {specialty.description[1] ? <SpecialtyDescription>{specialty.description[1]}</SpecialtyDescription> : <></>}
                        {specialty.value ? 
                        <>
                            <SpecialtyValue>Valor da Consulta:</SpecialtyValue>
                            <SpecialtyValue>R$ {specialty.value},00</SpecialtyValue>
                        </>: <></>}

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

`;

const ClinicSpecialty = styled.li`
    color: ${({ isSelected }) => (isSelected ? '#50F4FF' : '#FFFFFF')};
    &:hover{
    color: #50F4FF;
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