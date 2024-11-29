import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import { getAllPrescriptions } from "../../../services/clientApi";
import PrescriptionCard from "./PrescriptionCard";

export default function MyPrescriptions(){
    const [prescriptions, setPrescriptions] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const prescriptions = await getAllPrescriptions(token);
            setPrescriptions(prescriptions);
        }
        fetchData();
    }, [token]);

    return(
        <Body>
            <InfoBody>
                {prescriptions.map((prescription, index) => (
                <PrescriptionCard prescription={prescription} count={index + 1} key={index} />
                ))}
            </InfoBody>
        </Body>
    );
}

const Body = styled.div`

`;

const InfoBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    max-height: 85vh;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;