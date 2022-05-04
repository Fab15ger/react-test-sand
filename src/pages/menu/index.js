import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1>Pagina Menu</h1>
      <Link to="/">
        <h1>Inicio</h1>
      </Link>
    </div>
  );
}

export default Menu;
