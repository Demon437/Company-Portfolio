import { useState } from "react";

function AddService() {
    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    return (
        <div>
            <h2>Add Service</h2>

            <input placeholder="Title" /><br /><br />
            <textarea placeholder="Description"></textarea><br /><br />

            <button>Add Service</button>
        </div>
    );
}

export default AddService;