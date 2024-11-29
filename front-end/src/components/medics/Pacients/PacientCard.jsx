import styled from "styled-components"

export default function PacientCard({ onClick, pacient }){

    return(
        <Body>
            <TextBody onClick={() => onClick(pacient.Client.id)}>
                <div><strong>Nome: </strong>{pacient.Client.name}</div>
                <div><strong>CPF: </strong>{pacient.Client.cpf}</div>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
    cursor: pointer;
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;