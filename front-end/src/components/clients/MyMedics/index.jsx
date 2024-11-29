import styled from "styled-components"
import MedicCard from "./MedicCard";
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import { getAllMedics } from "../../../services/clientApi";

export default function MyMedics(){
    const [medics, setMedics] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const medics = await getAllMedics(token);
            setMedics(medics);
        }
        fetchData();
    }, [token]);

    return(
        <Body>
            <InfoBody>
            {medics.map((Medic, index) => (
              <MedicCard key={index} count={index + 1} medic={Medic}/>
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