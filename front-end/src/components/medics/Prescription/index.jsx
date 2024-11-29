import styled from "styled-components"
import { PiKeyReturnFill } from "react-icons/pi";
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import { getAllReports } from "../../../services/clientApi";
import ReportCard from "./ReportCard";
import ReadDocument from "../../ReadDocument";

export default function Prescription(){
    const [reportSelected, setReportSelected] = useState(null);
    const [reports, setReports] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const reports = await getAllReports(token);
            setReports(reports);
        }
        fetchData();
    }, [token]);

    function renderReports(){
        return(
            <InfoBody>
                {reports.map((report, index) => (
                    <ReportCard onClick={() => {setReportSelected(report)}} report={report} key={index} />
                ))}
            </InfoBody>
        )
    }

    return(
        <Body>
            {reportSelected ? 
            <>
                <ReturnButton onClick={() => {setReportSelected()}}>
                    Retornar
                <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <ReadDocument text={reportSelected}/>
            </> 
            : 
            renderReports()}
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