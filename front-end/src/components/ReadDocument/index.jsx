import styled from "styled-components"

export default function ReadDocument({ text }){
    return(
        <Body>
            <TextBody>
                <Title>{text.title}</Title>
                <Text>{text.text}</Text>
            </TextBody>
        </Body>
    );
}

const Body = styled.div`
    width: 350px;
    height: 90px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    width: 75vw;
    max-width: 75vw;
    height: 75vh;
    max-height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
`;

const TextBody = styled.div`
    color: black;
    margin-left: 10px;
    margin-top: 5px;
`;

const Title = styled.h1`

`;

const Text = styled.div`

`;