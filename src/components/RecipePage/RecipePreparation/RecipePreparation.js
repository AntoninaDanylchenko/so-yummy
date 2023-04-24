export const RecipePreparation = ({ recipe }) => {
  const { title, thumb } = recipe.recipe;

  const instructions = recipe.recipe.instructions
    .split('.')
    .filter(item => Number.isNaN(Number(parseInt(item))))
    .filter(str => str.trim() !== '');

  return (
    <div>
      <h2>Recipe preparation</h2>
      <ul>
        {instructions.map((item, idx) => (
          <li key={idx}>
            <span>{idx + 1}</span>
            <p>{item.trim()}</p>
          </li>
        ))}
      </ul>
      <img src={thumb} alt={title}></img>
    </div>
  );
};
