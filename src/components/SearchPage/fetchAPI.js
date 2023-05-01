import axios from 'axios';

const BASE_URL = 'https://soyummy-backend-first-team.onrender.com';

export const fetchRecipesByTitle = async query => {
  const response = await axios.get(`${BASE_URL}/search?search=${query}`);
  return response;
};

export const fetchRecipesByIngredients = async query => {
  const response = await axios.get(`${BASE_URL}/ingredients?search=${query}`);
  return response;
};
