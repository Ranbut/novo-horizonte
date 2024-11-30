import axios from 'axios';

export async function getAllMedics(token) {
  const response = await axios.get("http://localhost:5000/clients/medics", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllMyAppointments(token) {
  const response = await axios.get("http://localhost:5000/clients/appointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllPrescriptions(token) {
  const response = await axios.get("http://localhost:5000/clients/prescriptions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllReports(token) {
  const response = await axios.get("http://localhost:5000/clients/reports", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAllExams(token) {
  const response = await axios.get("http://localhost:5000/clients/exams", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function requestRenewal(id, token) {
  const response = await axios.put(`http://localhost:5000/prescriptions/renew/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateInfo(body, token) {
  const response = await axios.put("http://localhost:5000/clients/info", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}