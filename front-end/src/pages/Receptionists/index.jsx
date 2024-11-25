import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import userImage from "../../assets/user-profile-female.png"
import InfoForm from "../../components/InfoForm";
import UserContext from "../../contexts/UserContext";
import RegisterForm from "../../components/RegisterForm";

export default function Receptionists() {
    const [name, setName] = useState("Default Name");
    const [selectedOption, setSelectedOption] = useState("InfoForm");

    const { userData } = useContext(UserContext);

    useEffect(() => {
        const userName = userData.client.name.split(' ');
        setName(userName[0] + " " + userName[1]);
    }, [userData.client.name]);

    return(
        <>
            <Header>
                <UserImage src={userImage} alt="userImage"/>
                <UserGreetings>Olá, {name}</UserGreetings> 
                <LogoutButton>Sair e Deslogar</LogoutButton>
            </Header>
            <MainBody>
                <OptionsBody>
                    <OptionsSelection>
                        <Option onClick={() => setSelectedOption("RegisterClient")}>Registrar Paciente</Option>
                        <Option onClick={() => setSelectedOption("MakeAppointment")}>Marca Consulta</Option>
                        <Option onClick={() => setSelectedOption("InfoForm")}>Dados Pessoais</Option>
                    </OptionsSelection>
                </OptionsBody>
                <MainSelected>
                    <Title>
                        {selectedOption === "InfoForm" ? "Dados Pessoais" :
                        selectedOption === "RegisterClient" ? "Registrar Paciente" :
                        selectedOption === "MakeAppointment" ? "Marcar Consulta" : "Title"}
                    </Title>
                    {selectedOption === "InfoForm" ? <InfoForm/> :
                        selectedOption === "RegisterClient" ? <RegisterForm/> :
                        selectedOption === "MakeAppointment" ? <></> : <></>}
                </MainSelected>
            </MainBody>
        </>
    )
}

const Header = styled.div`
    background: linear-gradient(#136084 0%, #0C3446 100%);
    color: white;
    font-size: 36px;
    display: flex;
    height: 100px;
`;

const UserImage = styled.img`
    margin-left: 76px;
    margin-top: 25px;
    width: 50px;
    height: 50px;
`;

const UserGreetings = styled.div`
    margin-left: 30px;
    margin-top: 25px;
    font-size: 36px;
`;

const LogoutButton = styled.button`
    margin-left: 65%;
    margin-top: 20px;
    width: 222px;
    height: 64px;
    color: white;
    background-color: #1878A5;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const MainBody = styled.div`
    display: flex;
    background-color: #D9D9D9;
`;

const OptionsBody = styled.div`
    background: linear-gradient(#136084 0%, #0C3446 100%);
    height: 100vh;
`;

const OptionsSelection = styled.div`
    margin-top: 3px;
    display: flex;
    gap: 3px;
    flex-direction: column;
`;

const Option = styled.div`
    width: 280px;
    height: 70px;
    font-size: 24px;
    background-color: #092E3F;
    text-align: center;
    vertical-align: middle;
    line-height: 70px; 
    border-style: solid;

    &:hover{
        background-color: #125575;
        color: #6DF6FF;
        cursor: pointer;
    }
`;

const MainSelected = styled.div`
    margin-left: 40px;
`;

const Title = styled.h1`

`;