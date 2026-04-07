import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function AdminLayout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <div style={{ flex: 1, background: "#f3f4f6", minHeight: "100vh" }}>
                <Header />
                <div style={{ padding: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;