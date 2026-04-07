import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Projects</h2>

            <button
                onClick={() => navigate("/admin/add-project")}
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    background: "black",
                    color: "white"
                }}
            >
                + Add Project
            </button>

            <div style={{ marginTop: "20px", background: "#fff", padding: "20px" }}>
                No projects yet
            </div>
        </div>
    );
}

export default Projects;