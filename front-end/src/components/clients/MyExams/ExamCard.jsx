import styled from "styled-components"

export default function ExamCard({ onClick, exam }){
    const date = new Date(exam.createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    return(
        <Body>
            <TextBody onClick={() => onClick(exam)}>
                <div><strong>{exam.title}</strong></div>
                <div>{exam.Medic.name}</div>
                <div><strong>{exam.Medic.specialty}</strong></div>
                <div><strong>Data: </strong>{formattedDate}</div>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 90px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;