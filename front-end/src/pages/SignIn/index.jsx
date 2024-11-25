import styled from "styled-components";
import clinic from '../../assets/photo-6.png'
import { signIn } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
          const userData = await signIn(cpf, password);
          setUserData(userData);
          alert('Login successful!');
          navigate(`/clients`);
        } catch (error) {
          setLoading(false);
          alert('Unable to login!');
        }
      };

    return(
        <PageBody>
            <BackgroundImage src={clinic} alt="background"/>
            <div>
                <Login>
                    <img src="" alt="logo" />
                    <div>
                        <LoginTitle>Fazer login</LoginTitle>
                        <LoginDescription>Insira seu CPF e sua senha para entrar em sua conta.</LoginDescription>
                        <div>
                            <Field>
                                <Label>CPF:</Label>
                                <Input 
                                    disabled={loading}
                                    id="cpf"
                                    name="cpf"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    type="email" />
                            </Field>
                            <Field>
                                <Label>Senha:</Label>
                                <Input 
                                    disabled={loading}
                                    type="password"
                                    id="password"
                                    value={password}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                            </Field>
                        </div>
                        <button onClick={handleSubmit}>Entrar</button>
                        <ForgotPassword>
                            <div>Esqueceu de sua senha?</div>
                            <ForgotPasswordLink>Clique aqui.</ForgotPasswordLink>
                        </ForgotPassword>
                    </div>
                </Login>
            </div>
        </PageBody>
    )
}

const PageBody = styled.div`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    display: flex;
`;

const BackgroundImage = styled.img`
    width: 50vw;
    height: 100vh;
`;

const Login = styled.div`
    text-align: center;
    color: white;
    margin-left: 15vw;
    margin-top: 30vh;
`;

const LoginTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

const LoginDescription = styled.p`
    width: 196px;
    height: 48px;
    font-size: 16px;
`;

const Field = styled.div`
    margin-left: 10px;
    text-align: left;
    font-weight: 600;
`;

const Label = styled.div`
    margin-top: 8px;
`;

const Input = styled.input`

`;

const ForgotPassword = styled.div`
    margin-top: 16px;
`;

const ForgotPasswordLink = styled.div`
    color: #6DF6FF;
`;