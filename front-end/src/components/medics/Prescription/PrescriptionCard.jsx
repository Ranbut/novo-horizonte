import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { aproveRenewal } from "../../../services/medicApi";

export default function PrescriptionCard({ prescription, count }){

    const date = new Date(prescription.expirationDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    const now = new Date();
    const isExpired = date < now;

    const token = useToken()

    async function aprovePrescriptionRenewal() {
        try{
            await aproveRenewal(prescription.id, token);
            prescription.requestingRenewal = false;
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
                <PrescriptionDate isExpired={isExpired}><strong>Expira em:</strong> {formattedDate}</PrescriptionDate>
                <RenewButton
                    onClick={aprovePrescriptionRenewal}
                    disabled={!isExpired || !prescription.requestingRenewal}
                    >
                        Aprovar solicitação de renovação
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