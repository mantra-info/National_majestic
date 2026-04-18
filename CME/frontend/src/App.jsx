import { NavLink, Route, Routes } from "react-router-dom";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import PublicFormPage from "./pages/PublicFormPage.jsx";

export default function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CME Automation</p>
          <h1>Certificate Management System</h1>
        </div>
        <nav className="nav">
          <NavLink to="/">Public Form</NavLink>
          <NavLink to="/admin">Admin Panel</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<PublicFormPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </main>
    </div>
  );
}
