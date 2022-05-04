import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Error from "./pages/error";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
