import styled from "styled-components"
import useToken from "../../../hooks/useToken";
import { deleteExamById } from "../../../services/medicApi";

export default function ExamCard({ onClick, exam }){
    const date = new Date(exam.createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    const token = useToken()

    async function deleteExam() {
        try{
            await deleteExamById(exam.id, token);
            alert('Exame deletado!');
        }
        catch (error){
            alert('Não conseguiu deletar o exame.\nTente novamente mais tarde.');
        }
    }

    return(
        <Body>
            <TextBody onClick={() => onClick(exam)}>
                <div><strong>{exam.title}</strong></div>
                <div><strong>Data: </strong>{formattedDate}</div>
            </TextBody>
            <Button style={{color: 'red'}} onClick={deleteExam}>
                    Deletar
            </Button>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 80px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
    cursor: pointer;
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;

const Button = styled.button`
    margin-left: 10px;
    margin-top: 5px;
`;