import axios from 'axios';

export async function getAllMedics(token) {
  const response = await axios.get("http://localhost:5000/medics", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllClients(token) {
  const response = await axios.get("http://localhost:5000/clients", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createClient(name, cpf, birthday, password, adress, phone, email) {
  const response = await axios.post("http://localhost:5000/clients", { name, cpf, birthday, password, adress, phone, email });
  return response.data;
}

export async function createAppointement(clientId, medicId, appointementDate, token) {
  const response = await axios.post(`http://localhost:5000/appointements/${medicId}/${clientId}`, { appointementDate },  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}