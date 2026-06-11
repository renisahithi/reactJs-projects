import { useAuth } from "../context/AuthContext";
import { User, LogOut } from "lucide-react";

function Dashboard() {
  const auth = useAuth();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>
      <div style={{
        padding: "40px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "350px"
      }}>
        <User size={48} style={{ color: "#3b82f6", marginBottom: "20px" }} />

        <h2 style={{ color: "#555", marginBottom: "20px" }}>
          Welcome, {auth.user}!
        </h2>

        <button
          onClick={auth.logout}
          style={{
            padding: "12px 24px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "auto"
          }}
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;