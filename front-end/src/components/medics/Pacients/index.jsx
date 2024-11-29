import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import { getAllMedicClients } from "../../../services/medicApi.jsx";
import PacientCard from "./PacientCard.jsx";

export default function Pacients({ select }){
    const [pacients, setPacients] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const pacients = await getAllMedicClients(token);
            setPacients(pacients);
        }
        fetchData();
    }, [token]);

    return(
        <Body>
            <InfoBody>
                {pacients.map((pacient, index) => (
                    <PacientCard pacient={pacient} key={index} />
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