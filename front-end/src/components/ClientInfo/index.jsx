import styled from "styled-components"
import userImage from "../../assets/user-profile-female.png"
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { updateInfo } from "../../services/clientApi";
import useToken from "../../hooks/useToken";

export default function ClientInfo(){
    const { userData, setUserData } = useContext(UserContext);
    const [adress, setAdress] = useState(userData.client.adress);
    const [phone, setPhone] = useState(userData.client.phone);
    const [email, setEmail] = useState(userData.client.email);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const token = useToken();

    function checkPasswordLenght(){
        return password.length == 7;
    }

    function checkIfPasswordsIsEqual(){
        return password == passwordConfirm;
    }

    async function handleSubmit(e) {
        if (checkIfPasswordsIsEqual()){
            if (checkPasswordLenght()) {
                e.preventDefault();
                setLoading(true);
                try {
                  await updateInfo(adress, phone, email, password, token);
                  alert('Informações atualizadas!');
                } catch (error) {
                  setLoading(false);
                  alert('Falha em atualizar as informações!');
                }
            }
            else{
                alert('A senha deve ser no minimo 7 characteres.');
            }
        }
        else{
            alert('As senhas não coincidem!');
        }
      };

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
                    <InputField 
                    disabled={loading}
                    id="adress"
                    name="adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    />
                    <SearchCEP>Buscar CEP.</SearchCEP>
                </InputBody>
                <InputBody>
                    <InputLabel>Data de aniversário:</InputLabel>
                    <InputField disabled/>
                </InputBody>
                <InputBody>
                    <InputLabel>Telefone:</InputLabel>
                    <InputField 
                        disabled={loading}
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </InputBody>
            </InfoBody>
            <InfoBody>
                <InputBody>
                    <InputLabel>Email:</InputLabel>
                    <InputField
                        disabled={loading}
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBody>
                <InputBody>
                    <InputLabel>Nova Senha:</InputLabel>
                    <InputField
                        disabled={loading}
                        id="password"
                        name="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputBody>
                <InputBody>
                    <InputLabel>Confirmar Senha:</InputLabel>
                    <InputField
                        disabled={loading}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputBody>
                <SaveButton onClick={handleSubmit}>
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