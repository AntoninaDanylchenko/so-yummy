import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/main">Main</NavLink>
        </li>
        <li>
          <NavLink to="/category/:categoryName">Category</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add recipes</NavLink>
        </li>
        <li>
          <NavLink to="/my">My recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
