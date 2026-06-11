import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { User, LogIn } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      auth.login(username); 
    }
  };

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
        <h2 style={{ marginBottom: "30px", color: "#555" }}>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <User style={{ position: "absolute", left: "10px", top: "12px", color: "#aaa" }} size={18} />
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 12px 12px 35px",
                border: "1px solid #ccc",
                borderRadius: "6px"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#6245a5",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <LogIn size={18} />
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;