import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                form
            );

            // ✅ Save token
            localStorage.setItem("token", res.data.token);

            alert("Login successful ✅");

            navigate("/admin");
        } catch (err) {
            console.error(err);
            alert("Invalid credentials ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f3f4f6"
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "10px",
                    width: "300px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
            >
                <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "10px",
                        background: "#000",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;