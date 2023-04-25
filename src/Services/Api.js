import axios from 'axios';
const URL = 'https://soyummy-backend-first-team.onrender.com';

const fetchApi = async url => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error('Something wrong. Try again.');
  }
};

export const fetchRecipesMain = async limit => {
  const url = `${URL}/recipes/main-page?limit=${limit}`;
  const response = await fetchApi(url);

  return response.map(({ _id, title, preview, thumb, category }) => ({
    id: _id,
    title,
    preview,
    thumb,
    categoryRecipe: category.toLowerCase(),
  }));
};

export const fetchPopularRecipe = async limit => {
  const url = `${URL}/popular-recipe?limit=${limit}`;
  const response = await fetchApi(url);
  // return response;
  console.log(response);
};
