import styled from "styled-components"
import userImage from "../../assets/user-profile-female.png"
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function ClientInfo(){
    const { userData, setUserData } = useContext(UserContext);

    return(
        <Body>
            <InfoBody>
                <InputBody>
                    <InputLabel>Nome completo:</InputLabel>
                    <InputField disabled value={userData.client.name}/>
                </InputBody>
                <InputBody>
                    <InputLabel>CPF:</InputLabel>
                    <InputField disabled value={userData.client.cpf}/>
                </InputBody>
                <InputBody>
                    <InputLabel>Endereço:</InputLabel>
                    <InputField/>
                    <SearchCEP>Buscar CEP.</SearchCEP>
                </InputBody>
                <InputBody>
                    <InputLabel>Data de aniversário:</InputLabel>
                    <InputField disabled/>
                </InputBody>
                <InputBody>
                    <InputLabel>Telefone:</InputLabel>
                    <InputField/>
                </InputBody>
            </InfoBody>
            <InfoBody>
                <InputBody>
                    <InputLabel>Email:</InputLabel>
                    <InputField/>
                </InputBody>
                <InputBody>
                    <InputLabel>Nova Senha:</InputLabel>
                    <InputField/>
                </InputBody>
                <InputBody>
                    <InputLabel>Confirmar Senha:</InputLabel>
                    <InputField/>
                </InputBody>
                <SaveButton>
                    Salvar Alterações
                </SaveButton>
            </InfoBody>
            <UserImage src={userImage} alt="userImage"/>
        </Body>
      )
}

const Body = styled.div`
    display: flex;
    gap: 23px;
`;

const InfoBody = styled.div`
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputBody = styled.div`

`;

const InputLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const InputField = styled.input`
    margin-top: 8px;
    width: 295px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
`;

const SearchCEP = styled.div`
    margin-top: 13px;
    color: #6DF6FF;
    cursor: pointer;
`;

const SaveButton = styled.button`
    color: white;
    font-size: 24px;
    background-color: #1878A5;
    width: 249px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
`;

const UserImage = styled.img`
    width: 250px;
    height: 250px;
`;