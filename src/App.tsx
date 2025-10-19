import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="app">
      <CustomCursor />
      <header className="site-header">
        <div className="nav-wrap">
          <div className="brand">
            <span className="p">s</span>
            <span className="l">t</span>
            <span className="a">i</span>
            <span className="y">t</span>
            <span className="d">c</span>
            <span className="a2">h</span> 
          </div>
          <nav className="nav-links">
            <NavLink to="/" end className={({isActive}) => isActive ? "link active" : "link"}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "link active" : "link"}>Projects</NavLink>
            <NavLink to="/team" className={({isActive}) => isActive ? "link active" : "link"}>Team</NavLink>
          </nav>
        </div>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
    </div>
  );
}
