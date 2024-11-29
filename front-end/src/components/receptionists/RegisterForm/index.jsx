import styled from "styled-components"
import userImage from "../../../assets/user-profile-female.png"
import { useState } from "react";
import { createClient } from "../../../services/receptionistApi";

export default function RegisterForm(){
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function resetFields(){
        setName('');
        setCpf('');
        setAdress('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    function checkCPFLenght(){
        return cpf.length === 11;
    }

    function checkPasswordLenght(){
        return password.length >= 7;
    }

    function checkIfPasswordsIsEqual(){
        return password === passwordConfirm;
    }

    async function handleSubmit(e) {
        if (checkCPFLenght()) {
            if (checkIfPasswordsIsEqual()){
                if (checkPasswordLenght()) {
                    e.preventDefault();
                    setLoading(true);
                    try {
                      const birthdayObject = new Date(birthday);
                      await createClient(name, cpf, birthdayObject.toISOString(), password, adress, phone, email);
                      alert('Paciente registrado!');
                      resetFields();
                      setLoading(false);
                    } catch (error) {
                      setLoading(false);
                      alert('Falha ao registrar paciente!');
                    }
                }
                else{
                    alert('A senha deve ser no minimo 7 characteres.');
                }
            }
            else{
                alert('As senhas não coincidem!');
            }
        }
        else{
            alert('CPF não possui 11 caracteres.');
        }
      };

    return(
        <Body>
            <InfoBody>
                <InputBody>
                    <InputLabel>Nome completo:</InputLabel>
                    <InputField 
                        disabled={loading}
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputBody>
                <InputBody>
                    <InputLabel>CPF:</InputLabel>
                    <InputField
                        disabled={loading}
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        maxlength="11"
                        onChange={(e) => setCpf(e.target.value)}
                    />
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
                    <InputField 
                        disabled={loading}
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        type="date"
                        onChange={(e) => setBirthday(e.target.value)}/>
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