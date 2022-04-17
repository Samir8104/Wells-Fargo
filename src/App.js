import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Componets/homepage.js";
import Featured from "./Componets/Featured.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/featured" element={<Featured />}/>
      </Routes>
    </Router>
  );
}

export default App;
