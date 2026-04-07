import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={{ width: "250px", background: "#111", color: "#fff", padding: "20px" }}>
            <h2>Admin Panel</h2>

            <ul style={{ marginTop: "20px" }}>
                <li><Link to="/admin" style={{ color: "#fff" }}>Dashboard</Link></li>
                <li><Link to="/admin/projects" style={{ color: "#fff" }}>Projects</Link></li>
                <li><Link to="/admin/services" style={{ color: "#fff" }}>Services</Link></li>
                <li><Link to="/admin/contacts" style={{ color: "#fff" }}>Contacts</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;