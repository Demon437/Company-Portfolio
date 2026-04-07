function Header() {
    return (
        <div style={{ background: "#fff", padding: "15px", display: "flex", justifyContent: "space-between" }}>
            <h3>Admin Dashboard</h3>

            <button style={{
                padding: "8px 15px",
                background: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer"
            }}>
                Logout
            </button>
        </div>
    );
}

export default Header;