import styled from "styled-components"

export default function MedicCard({ medic, count }){
    return(
        <Body>
            <TextBody>
                <div><strong>#{count}</strong></div>
                <div><strong>Nome:</strong> {medic.Medic.name}</div>
                <div><strong>Especialidade:</strong> {medic.Medic.specialty}</div>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 70px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;