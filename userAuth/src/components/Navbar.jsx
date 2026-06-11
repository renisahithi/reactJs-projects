import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, LayoutDashboard, User, LogOut } from "lucide-react";

function Navbar() {
  const auth = useAuth();
  const location = useLocation();

  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderBottom: "1px solid #e5e7eb"
  };

  const linkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    color: location.pathname === path ? "#3b82f6" : "#6b7280",
    fontWeight: location.pathname === path ? "600" : "400",
    padding: "8px 12px",
    borderRadius: "6px",
    background: location.pathname === path ? "#eff6ff" : "transparent"
  });

  return (
    <nav style={navStyle}>
      {/* Left Side: Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#3b82f6", fontSize: "20px", fontWeight: "bold" }}>
        <Home size={22} />
        Auth Demo
      </Link>

      {/* Right Side: Menu */}
      {auth.user && (
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <Link to="/dashboard" style={linkStyle("/dashboard")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280" }}>
            <User size={18} />
            {auth.user} 
          </div>

          <button 
            onClick={auth.logout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;