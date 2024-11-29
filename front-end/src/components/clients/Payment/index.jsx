import styled from "styled-components"

export default function Payment(){
    return(
        <Body>
            <InfoBody>
            </InfoBody>
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    gap: 23px;
`;

const InfoBody = styled.div`
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;