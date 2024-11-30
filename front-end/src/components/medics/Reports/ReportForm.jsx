import styled from "styled-components"
import { useState } from "react";
import { createReport } from "../../../services/medicApi";
import useToken from "../../../hooks/useToken";

export default function ReportForm({ clientId }){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const token = useToken()

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
          const body = {
            title,
            text
          }
          await createReport(body, clientId, token);
          alert('Relátorio criado!');
          setLoading(false);
        } catch (error) {
          setLoading(false);
          alert('Falha em criar o relátorio!');
        }
    };
  
    return(
        <Body>
            <InfoBody>
                <InputBody>
                    <InputLabel>Titulo:</InputLabel>
                    <InputField
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </InputBody>
                <InputBody>
                    <InputLabel>Descrição:</InputLabel>
                    <TextField 
                    disabled={loading}
                    id="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                </InputBody>
                <SaveButton onClick={handleSubmit}>
                    Criar Relátorio
                </SaveButton>
            </InfoBody>
        </Body>
      )
}

const Body = styled.div`
    display: flex;
    gap: 23px;
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

const InfoBody = styled.form`
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputBody = styled.div`

`;

const InputLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const InputField = styled.input`
    margin-top: 8px;
    width: 295px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
`;

const TextField = styled.textarea`
    margin-top: 8px;
    width: 295px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
`;

const SaveButton = styled.button`
    color: white;
    font-size: 24px;
    background-color: #1878A5;
    width: 249px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
`;