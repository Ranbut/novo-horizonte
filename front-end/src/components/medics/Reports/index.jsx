import styled from "styled-components"
import { PiKeyReturnFill } from "react-icons/pi";
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import ReadDocument from "../../ReadDocument";
import PacientCard from "../Pacients/PacientCard";
import { getAllMedicClients, getAllReportsByClient } from "../../../services/medicApi";

export default function Reports(){
    const [clientSelected, setClientSelected] = useState(null);
    const [pacients, setPacients] = useState([]);
    const [reportSelected, setReportSelected] = useState(null);
    const [reports, setReports] = useState([]);
    const token = useToken()

    function selectClient(pacient) {
        setClientSelected(pacient);
        fetchReportData(pacient);
    }

    async function fetchReportData(pacient) {
        const reports = await getAllReportsByClient(pacient.id, token);
        setReports(reports);
        console.log(reports);
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

    function renderReports(){
        return(
            <>
                <ReturnButton onClick={() => {setClientSelected(null)}}>
                        Retornar
                    <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <InfoBody>
                    {reports.map((report, index) => (
                        <ReportCard onClick={() => {setReportSelected(report)}} report={report} key={index} />
                    ))}
                </InfoBody>
            </>
        )
    }

    return(
        <Body>
            {!clientSelected ? renderPacients() : <></> }
            {clientSelected && !reportSelected ? renderReports() : <></>}
            {reportSelected ? 
            <>
                <ReturnButton onClick={() => {setReportSelected()}}>
                        Retornar
                    <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <ReadDocument text={reportSelected}/>
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
`;