import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { getAllClientsAppointments } from "../../../services/medicApi";

export default function Agenda(){
    const [appointments, setAppointments] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const appointments = await getAllClientsAppointments(token);
            setAppointments(appointments);
        }
        fetchData();
    }, [token]);

    return(
        <Body>
            <InfoBody>
            {appointments.map((appointement, index) => (
                <AppointmentCard appointement={appointement} key={index} />
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