import axios from 'axios';

export async function signIn(cpf, password) {
  const response = await axios.post("http://localhost:5000/auth/sign-in", { cpf, password });
  return response.data;
}