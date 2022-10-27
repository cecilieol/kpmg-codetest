import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import DummyPage from "./components/DummyPage";
import ReviewNotes from "./components/ReviewNotes";

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <NavLink to="/engagements" className="nav-link">
            Engagements
          </NavLink>
          <p className="arrow">→</p>
          <NavLink to="/engagements/2021_0001" className="nav-link">
            Microsoft 2021
          </NavLink>
          <p className="arrow">→</p>
          <p className="nav-link">Review Notes</p>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/engagements/2021_0001/reviewnotes" />}
          />
          <Route path="/engagements" element={<DummyPage />} />
          <Route path="/engagements/2021_0001" element={<DummyPage />} />
          <Route
            path="/engagements/2021_0001/reviewnotes"
            element={<ReviewNotes />}
          />
        </Routes>
      </Router>
    </>
  );
}
