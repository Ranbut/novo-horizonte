import axios from 'axios';

export async function createClient(name, cpf, password, adress, phone, email) {
  const response = await axios.post("http://localhost:5000/clients", { name, cpf, password, adress, phone, email });
  return response.data;
}