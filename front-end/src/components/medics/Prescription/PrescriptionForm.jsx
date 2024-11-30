import styled from "styled-components"
import { useState } from "react";
import { createPrescription } from "../../../services/medicApi";
import useToken from "../../../hooks/useToken";

export default function PrescriptionForm({ clientId }){
    const [medications, setMedications] = useState([""]);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const token = useToken()

    function handleInputChange(index, value) {
      const updatedItems = [...medications];
      updatedItems[index] = value;
      setMedications(updatedItems);
    };
  
    function addNewMedication() {
        setMedications([...medications, ""]);
    };
  
    function removeMedication(index) {
        const updatedMedications = medications.filter((_, i) => i !== index);
        setMedications(updatedMedications);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
          const body = {
            medications,
            description
          }
          await createPrescription(body, clientId, token);
          alert('Receita criada!');
          setLoading(false);
        } catch (error) {
          setLoading(false);
          alert('Falha em criar a receita!');
        }
    };
  
    return(
        <Body>
            <InfoBody>
                {medications.map((medication, index) => (
                    <InputBody key={index}>
                    <InputLabel>Medicamento #{index + 1}:</InputLabel>
                    <InputField
                        type="text"
                        value={medication}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                     />
                    {index !== 0 ? 
                    <button
                        type="button"
                        onClick={() => removeMedication(index)}
                        style={{ marginLeft: "10px", color: "red" }}
                            >
                        Remover
                    </button> : <></>}

                    </InputBody>
                ))}
                <AddButton type="button" onClick={addNewMedication}>
                    Adicionar outro medicamento +
                </AddButton>
                <InputBody>
                    <InputLabel>Descrição:</InputLabel>
                    <TextField 
                    disabled={loading}
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </InputBody>
                <SaveButton onClick={handleSubmit}>
                    Criar Receita
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

const AddButton = styled.button`
    color: white;
    font-size: 24px;
    background-color: #1878A5;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
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