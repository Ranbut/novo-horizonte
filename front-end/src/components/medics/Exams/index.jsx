import styled from "styled-components"
import { PiKeyReturnFill } from "react-icons/pi";
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import ReadDocument from "../../ReadDocument";
import PacientCard from "../Pacients/PacientCard";
import { getAllMedicClients, getAllExamsByClient } from "../../../services/medicApi";
import ExamCard from "./ExamCard";
import ExamForm from "./ExamForm";
import { IoIosRefresh, IoMdAdd } from "react-icons/io";

export default function Exams(){
    const [clientSelected, setClientSelected] = useState(null);
    const [pacients, setPacients] = useState([]);
    const [examSelected, setExamSelected] = useState(null);
    const [exams, setExams] = useState([]);
    const [adding, setAdding] = useState(false);
    const token = useToken()

    function selectClient(pacient) {
        setClientSelected(pacient);
        fetchExamsData(pacient);
    }

    async function fetchExamsData(pacient) {
        const exams = await getAllExamsByClient(pacient.id, token);
        setExams(exams);
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

    function renderExams(){
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
                    {exams.map((exam, index) => (
                        <ExamCard onClick={() => {setExamSelected(exam)}} exam={exam} key={index} />
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
                <h2>Novo Exame</h2>
                <ExamForm clientId={(clientSelected.id)}/>
            </> : <></>}
            {!clientSelected ? renderPacients() : <></> }
            {clientSelected && !examSelected && !adding ? renderExams() : <></>}
            {examSelected ? 
            <>
                <ReturnButton onClick={() => {setExamSelected()}}>
                        Retornar
                    <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <ReadDocument text={examSelected}/>
            </> 
            : <></>
            }
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