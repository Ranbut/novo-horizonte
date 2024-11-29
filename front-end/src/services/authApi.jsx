import axios from 'axios';

export async function signInClients(cpf, password) {
  const response = await axios.post("http://localhost:5000/auth/sign-in/clients/", { cpf, password });
  return response.data;
}