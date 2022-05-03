import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Statistics from "./components/Statistics";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/history" element={<Overview />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
