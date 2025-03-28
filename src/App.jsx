import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Analytics } from "@vercel/analytics/react";
import About from "./About";
import "./output.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
