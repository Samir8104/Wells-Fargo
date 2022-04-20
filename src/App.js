import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Componets/homepage.js";
import Featured from "./Componets/Featured.js";
import LearnAndEarn from "./Componets/LearnAndEarn.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/featured" element={<Featured />}/>
        <Route path="/learn" element={<LearnAndEarn />}/>
      </Routes>
    </Router>
  );
}

export default App;
