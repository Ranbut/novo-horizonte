import styled from "styled-components"
import { useEffect, useState } from "react";
import { createAppointement, getAllClients, getAllMedics } from "../../../services/receptionistApi";
import useToken from "../../../hooks/useToken";

export default function RegisterAppointment(){
    const [clients, setClients] = useState([]);
    const [medics, setMedics] = useState([]);
    const [clientId, setClientId] = useState(0);
    const [medicId, setMedicId] = useState(0);
    const [appointmentDate, setAppointmentDate] = useState('01/12/2024');
    const [loading, setLoading] = useState(false);

    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const clients = await getAllClients(token);
            setClients(clients);
            const medics = await getAllMedics(token);
            setMedics(medics);
        }
        fetchData();
    }, [token]);

    function handleClientChange(event){
        setClientId(event.target.value);
    }

    function handleMedicChange(event){
        setMedicId(event.target.value);
    }

    async function sendRegisterAppointment(){
        try {
            setLoading(true);
            await createAppointement(clientId, medicId, appointmentDate, token);
            alert("Consulta marcada.")
        } catch (error) {
            alert("Não foi possível marcar a consulta.")
            setLoading(false);
        }
    }

    return(
        <Body>
            <InfoBody>
                <InputBody>
                    <InputLabel>Cliente:</InputLabel>
                    <select onChange={handleClientChange}>
                    {clients.map((client ,index) => (
                    <option key={index} value={client.id}>{client.name} - {client.cpf}</option>
                    ))}
                    </select>
                </InputBody>
                <InputBody>
                    <InputLabel>Médico(a):</InputLabel>
                    <select onChange={handleMedicChange}>
                    {medics.map((medic ,index) => (
                    <option key={index} value={medic.id}>{medic.name} - {medic.specialty}</option>
                    ))}
                    </select>
                </InputBody>
                <InputBody>
                    <InputLabel>Data da consulta:</InputLabel>
                    <InputField
                        disabled={loading}
                        id="appointmentDate"
                        name="appointmentDate"
                        value={appointmentDate}
                        type="date"
                        onChange={(e) => setAppointmentDate(e.target.value)}>
                    </InputField>
                </InputBody>
                <SaveButton onClick={sendRegisterAppointment}>
                    Marcar Consulta
                </SaveButton>
            </InfoBody>
            
        </Body>
      )
}

const Body = styled.div`
    display: flex;
    gap: 23px;
`;

const InfoBody = styled.div`
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputBody = styled.div`

`;


const InputLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const InputField = styled.input`
    margin-top: 8px;
    width: 295px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
`;

const SaveButton = styled.button`
    color: white;
    font-size: 24px;
    background-color: #1878A5;
    width: 249px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
`;