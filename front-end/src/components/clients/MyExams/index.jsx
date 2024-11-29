import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { useEffect, useState } from "react";
import { getAllExams } from "../../../services/clientApi";
import ExamCard from "./ExamCard";
import { PiKeyReturnFill } from "react-icons/pi";
import ReadDocument from "../../ReadDocument";

export default function MyExams(){
    const [examSelected, setExamSelected] = useState(null);
    const [exams, setExams] = useState([]);
    const token = useToken()

    useEffect(() => {
        async function fetchData() {
            const exams = await getAllExams(token);
            setExams(exams);
        }
        fetchData();
    }, [token]);

    function renderExams(){
        return(
            <InfoBody>
                {exams.map((exam, index) => (
                    <ExamCard onClick={() => {setExamSelected(exam)}} exam={exam} key={index} />
                ))}
            </InfoBody>
        )
    }

    return(
        <Body>
            {examSelected ? 
            <>
                <ReturnButton onClick={() => {setExamSelected()}}>
                    Retornar
                <PiKeyReturnFill size={20}/>
                </ReturnButton>
                <ReadDocument text={examSelected}/>
            </> 
            : 
            renderExams()}
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