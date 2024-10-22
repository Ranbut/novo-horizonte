import styled from 'styled-components'

export default function Footer(){
    return(
        <FooterBody>
            <ClinicsContainer>
                <ClinicContainer>
                    <Title>Unidade I</Title>
                    <Text>Telefone: (XX) xxxxx-xxxx</Text>
                    <Text>Endereço: xxxxxxxxxxxxxxxxxxxx</Text>
                    <Text>Atendimento: das xxh às xxh, xxxxxx e xxxxxx</Text>
                </ClinicContainer>
                <ClinicContainer>
                    <Title>Unidade II</Title>
                    <Text>Telefone: (XX) xxxxx-xxxx</Text>
                    <Text>Endereço: xxxxxxxxxxxxxxxxxxxx</Text>
                    <Text>Atendimento: das xxh às xxh, xxxxxx e xxxxxx</Text>
                </ClinicContainer>
            </ClinicsContainer>
        </FooterBody>
    )
}

const FooterBody = styled.footer`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    color: white;
    text-shadow: 0px 2px #000000;
`;

const ClinicsContainer = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    display: flex;
    gap: 10%;
`;

const ClinicContainer = styled.div`
    margin-top: 67px;
    margin-bottom: 68px;
`;

const Title = styled.div`
    font-size: 40px;
`;


const Text = styled.div`
    font-size: 24px;
`;