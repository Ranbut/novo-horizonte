import axios from 'axios';

export async function updateInfo(adress, phone, email, password, token) {
  const response = await axios.put("http://localhost:5000/clients/info", { adress, phone, email, password }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}