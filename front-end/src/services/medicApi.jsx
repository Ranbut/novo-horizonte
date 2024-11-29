import axios from 'axios';

export async function getAllMedicClients(token) {
    const response = await axios.get("http://localhost:5000/medics/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
}

export async function getAllReportsByClient(clientId, token) {
    const response = await axios.get(`http://localhost:5000/reports/client/${clientId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }