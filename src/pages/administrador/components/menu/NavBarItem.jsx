import { Link } from 'react-router-dom';
const NavBarItem = ({ texto, ruta }) => {
  return (
    <li className="nav-item ">
      <Link to={ruta}>
        <button
          className="btn border-0  "
          aria-current="page"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          {texto}
        </button>
      </Link>
    </li>
  );
};

export default NavBarItem;
