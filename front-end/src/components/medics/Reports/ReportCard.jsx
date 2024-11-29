import styled from "styled-components"

export default function ReportCard({ onClick, report }){

    const date = new Date(report.createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    return(
        <Body>
            <TextBody onClick={() => onClick(report)}>
                <div><strong>{report.title}</strong></div>
                <div><strong>Data: </strong>{formattedDate}</div>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(#646a6d 0%, #313435 100%);
    cursor: pointer;
`;

const TextBody = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`;