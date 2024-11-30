import styled from "styled-components"
import { PiKeyReturnFill } from "react-icons/pi";
import { IoMdAdd, IoIosRefresh } from "react-icons/io";
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import PacientCard from "../Pacients/PacientCard";
import { getAllMedicClients, getAllPrescriptionsByClient } from "../../../services/medicApi";
import PrescriptionCard from "./PrescriptionCard";
import PrescriptionForm from "./PrescriptionForm";

export default function Prescription(){
    const [clientSelected, setClientSelected] = useState(null);
    const [pacients, setPacients] = useState([]);
    const [prescriptions, setPrescriptions] = useState([]);
    const [adding, setAdding] = useState(false);
    const token = useToken()

    function selectClient(pacient) {
        setClientSelected(pacient);
        fetchPrescriptionData(pacient);
    }

    async function fetchPrescriptionData(pacient) {
        const prescription = await getAllPrescriptionsByClient(pacient.id, token);
        setPrescriptions(prescription);
    }

    useEffect(() => {
        async function fetchClientData() {
            const pacients = await getAllMedicClients(token);
            setPacients(pacients);
        }
        fetchClientData();
    }, [token]);

    function renderPacients(){
        return(
            <InfoBody>
                {pacients.map((pacient, index) => (
                    <PacientCard onClick={() => {selectClient(pacient.Client)}} pacient={pacient} key={index} />
                ))}
            </InfoBody>
        )
    }

    function renderPrescriptions(){
        return(
            <>
                <AddButton onClick={() => {setAdding(true)}}>
                        Novo
                    <IoMdAdd size={20}/>
                </AddButton>
                <ReturnButton onClick={() => {setClientSelected(null)}}>
                        Retornar
                    <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <RefreshButton onClick={() => {selectClient(clientSelected)}}>
                        Atualizar
                    <IoIosRefresh size={20}/>
                </RefreshButton>
                <InfoBody>
                    {prescriptions.map((prescription, index) => (
                        <PrescriptionCard prescription={prescription} count={index + 1} key={index} />
                    ))}
                </InfoBody>
            </>
        )
    }

    return(
        <Body>
            {adding ? 
            <>
                <ReturnButton onClick={() => {setAdding(false)}}>
                        Retornar
                    <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <h2>Nova Receita</h2>
                <PrescriptionForm clientId={(clientSelected.id)}/>
            </> : <></>}
            {!clientSelected && !adding ? renderPacients() : <></> }
            {clientSelected && !adding ? renderPrescriptions() : <></> }
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

const ReturnButton = styled.button`
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 20px;
    margin-left: 10px;
`;

const AddButton = styled.button`
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 20px;
`;

const RefreshButton = styled.button`
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 20px;
    margin-left: 10px;
`;