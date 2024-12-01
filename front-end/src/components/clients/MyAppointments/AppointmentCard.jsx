import styled from "styled-components"

export default function AppointmentCard({ appointement }){

    const date = new Date(appointement.appointementDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    const now = new Date();
    const isExpired = date < now;

    return(
        <Body>
            <TextBody>
                <div>{appointement.Medic.name}</div>
                <div><strong>{appointement.Medic.specialty}</strong></div>
            </TextBody>
            <DetailsBody>
                <AppointementDate isExpired={isExpired}><strong>Data:</strong> {formattedDate}</AppointementDate>
            </DetailsBody>
        </Body>
    );
}

const Body = styled.div`
    width: 400px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
    border-bottom: solid #ffffff;
`;

const AppointementDate = styled.div`
    color: ${({ isExpired }) => (!isExpired ? '#ffffff' : '#ff0000')};;
`;

const DetailsBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
`;