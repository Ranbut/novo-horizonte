import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import userImage from "../../assets/user-profile-male.png"
import InfoForm from "../../components/InfoForm";
import UserContext from "../../contexts/UserContext";
import RegisterForm from "../../components/receptionists/RegisterForm";
import { useNavigate } from "react-router-dom";
import RegisterAppointment from "../../components/receptionists/RegisterAppointment";

export default function Receptionists() {
    const [name, setName] = useState("Default Name");
    const [selectedOption, setSelectedOption] = useState("InfoForm");

    const { userData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('userData');
        alert('Saido da sessão!');
        navigate("/receptionists/sign-in");
      };

    useEffect(() => {
        const userName = userData.receptionist.name.split(' ');
        setName(userName[0] + " " + userName[1]);
    }, [userData.receptionist.name]);

    return(
        <>
            <Header>
                <UserImage src={userImage} alt="userImage"/>
                <UserGreetings>Olá, {name}</UserGreetings> 
                <LogoutButton onClick={handleLogout}>Sair e Deslogar</LogoutButton>
            </Header>
            <MainBody>
                <OptionsBody>
                    <OptionsSelection>
                        <Option isSelected={selectedOption === "RegisterClient"} onClick={() => setSelectedOption("RegisterClient")}>Registrar Paciente</Option>
                        <Option isSelected={selectedOption === "RegisterAppointment"} onClick={() => setSelectedOption("RegisterAppointment")}>Marca Consulta</Option>
                        <Option isSelected={selectedOption === "InfoForm"} onClick={() => setSelectedOption("InfoForm")}>Dados Pessoais</Option>
                    </OptionsSelection>
                </OptionsBody>
                <MainSelected>
                    <Title>
                        {selectedOption === "InfoForm" ? "Dados Pessoais" :
                        selectedOption === "RegisterClient" ? "Registrar Paciente" :
                        selectedOption === "RegisterAppointment" ? "Marcar Consulta" : "Title"}
                    </Title>
                    {selectedOption === "InfoForm" ? <InfoForm user={userData.receptionist}/> :
                        selectedOption === "RegisterClient" ? <RegisterForm/> :
                        selectedOption === "RegisterAppointment" ? <RegisterAppointment/> : <></>}
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
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
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
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
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
    background-color: ${({ isSelected }) => (isSelected ? '#125575' : '#092E3F')};
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