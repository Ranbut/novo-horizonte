import styled from "styled-components"
import { requestRenewal } from "../../../services/clientApi";
import useToken from "../../../hooks/useToken";

export default function PrescriptionCard({ prescription, count }){

    const date = new Date(prescription.expirationDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    const now = new Date();
    const isExpired = date < now;

    const token = useToken()

    async function requestPrescriptionRenewal() {
        try{
            await requestRenewal(prescription.id, token);
            prescription.requestingRenewal = true;
            alert('Solicitação enviada!');
        }
        catch (error){
            alert('Não conseguiu enviar a solicitação.\nTente novamente mais tarde.');
        }
    }

    return(
        <Body>
            <TextBody>
                <div>
                    <strong>#{count}</strong>
                </div>
                <div>
                    {prescription.medications.map((medication, index) => (
                        <span key={index}>{medication}, </span>
                    ))}
                </div>
                <div>{prescription.Medic.name}</div>
                <div><strong>{prescription.Medic.specialty}</strong></div>
                <PrescriptionDate isExpired={isExpired}><strong>Expira em:</strong> {formattedDate}</PrescriptionDate>
                <RenewButton
                    disabled={!isExpired || prescription.requestingRenewal}
                    onClick={requestPrescriptionRenewal}
                    >
                    {!prescription.requestingRenewal ? 'Solicitar renovação' : 'Solicitação em andamento'}
                </RenewButton>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 155px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;

const PrescriptionDate = styled.div`
    color: ${({ isExpired }) => (!isExpired ? '#ffffff' : '#ff0000')};
`;

const RenewButton = styled.button`
    margin-top: 5px;
`;