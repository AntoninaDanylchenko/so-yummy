import axios from 'axios';

const BASE_URL = 'https://soyummy-backend-first-team.onrender.com';

export const fetchRecipesByTitle = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/search?search=${query}&page=${page}`
  );
  return response;
};

export const fetchRecipesByIngredients = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/ingredients?search=${query}&page=${page}`
  );
  return response;
};
