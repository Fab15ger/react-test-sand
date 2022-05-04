import "./home.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsappSquare
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <h1>Pagina Home</h1>
      <Link to="/menu">
        <h1>Menu</h1>
      </Link>
      <FaLinkedin size={30} color="blue" />
      <FaInstagram size={30} color="purple" />
      <FaFacebookSquare size={30} color="darkblue" />
      <FaWhatsappSquare size={30} color="green" />
      <Link to="/errado">error</Link>
    </div>
  );
}

export default Home;
