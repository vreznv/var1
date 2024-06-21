import axios from 'axios';

const API_URL = '/api/users';

export const fetchUsers = async (searchTerm, pageUrl = '') => {
  const response = await axios.get(`${API_URL}?searchTerm=${searchTerm}&pageUrl=${pageUrl}`);
  return response.data;
};