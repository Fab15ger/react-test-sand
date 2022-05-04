import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Pagina not found. Error 404!</h1>
      <Link to="/">
        <h1>Voltar</h1>
      </Link>
    </div>
  );
}

export default Error;
