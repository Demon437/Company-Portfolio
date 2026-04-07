import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // ✅ Protect admin route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#fff", padding: "20px", flex: 1 }}>
          <h4>Total Projects</h4>
          <p>0</p>
        </div>

        <div style={{ background: "#fff", padding: "20px", flex: 1 }}>
          <h4>Total Services</h4>
          <p>0</p>
        </div>

        <div style={{ background: "#fff", padding: "20px", flex: 1 }}>
          <h4>Contact Leads</h4>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;