import axios from 'axios';

export async function getAllMedicClients(token) {
    const response = await axios.get("http://localhost:5000/medics/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
}

export async function getAllClientsAppointments(token) {
  const response = await axios.get("http://localhost:5000/appointements/medic", {
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

  export async function getAllPrescriptionsByClient(clientId, token) {
    const response = await axios.get(`http://localhost:5000/prescriptions/client/${clientId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function getAllExamsByClient(clientId, token) {
    const response = await axios.get(`http://localhost:5000/exams/client/${clientId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function createPrescription(body, clientId, token) {
    const response = await axios.post(`http://localhost:5000/prescriptions/client/${clientId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function deletePrescriptionById(prescriptionId, token) {
    const response = await axios.delete(`http://localhost:5000/prescriptions/${prescriptionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function createReport(body, clientId, token) {
    const response = await axios.post(`http://localhost:5000/reports/client/${clientId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function deleteReportById(reportId, token) {
    const response = await axios.delete(`http://localhost:5000/reports/${reportId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function createExam(body, clientId, token) {
    const response = await axios.post(`http://localhost:5000/exams/client/${clientId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function deleteExamById(examId, token) {
    const response = await axios.delete(`http://localhost:5000/exams/${examId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function aproveRenewal(prescriptionId, token) {
    const response = await axios.put(`http://localhost:5000/prescriptions/renew/${prescriptionId}/accept`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }