import styled from "styled-components";

export default function SignIn() {
    return(
        <PageBody>
            <img src="" alt="background"/>
            <div>
                <div>
                    <img src="" alt="logo" />
                    <div>
                        <p>Fazer login</p>
                        <p>Insira seu CPF e sua senha para entrar em sua conta.</p>
                        <div>
                            <div>
                                <div>CPF:</div>
                                <input type="email" />
                            </div>
                            <div>
                                <div>Senha:</div>
                                <input type="password" />
                            </div>
                        </div>
                        <div>
                            <div>Esqueceu de sua senha?</div>
                            <div>Clique aqui.</div>
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    )
}

const PageBody = styled.div`
    display: flex;
`;