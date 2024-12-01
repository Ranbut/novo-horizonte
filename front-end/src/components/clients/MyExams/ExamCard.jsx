import styled from "styled-components"

export default function ExamCard({ onClick, exam }){
    const date = new Date(exam.createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    return(
        <Body onClick={() => onClick(exam)}>
            <TextBody>
                <div><strong>{exam.title}</strong></div>
            </TextBody>
            <DetailsBody>
                <div>{exam.Medic.name}</div>
                <div><strong>{exam.Medic.specialty}</strong></div>
            </DetailsBody>
            <DetailsBody>
                <div><strong>Data: </strong>{formattedDate}</div>
            </DetailsBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
    cursor: pointer;
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
    border-bottom: solid #ffffff;
`;

const DetailsBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
`;