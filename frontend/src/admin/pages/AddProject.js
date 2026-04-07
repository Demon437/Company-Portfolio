import { useState } from "react";
import axios from "axios";

function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    shortDescription: "",
    category: "",
    year: "",
    image: null,
    tech: "",
    liveLink: "",
    longDescription: "",
    result: ""
  });

  // ✅ Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ File change
  const handleFileChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0]
    });
  };

  // ✅ Submit (API call added)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("shortDescription", form.shortDescription);
    formData.append("category", form.category);
    formData.append("year", form.year);
    formData.append("image", form.image); // file
    formData.append("tech", JSON.stringify(form.tech.split(",")));
    formData.append("liveLink", form.liveLink);
    formData.append("longDescription", form.longDescription);
    formData.append("result", form.result);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/projects`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Project Added Successfully ✅");

      // ✅ Reset form
      setForm({
        title: "",
        description: "",
        shortDescription: "",
        category: "",
        year: "",
        image: null,
        tech: "",
        liveLink: "",
        longDescription: "",
        result: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error adding project ❌");
    }
  };

  return (
    <div>
      <h2>Add Project</h2>

      {/* ✅ IMPORTANT */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} /><br /><br />

        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} /><br /><br />

        <input name="year" placeholder="Year" value={form.year} onChange={handleChange} /><br /><br />

        <input type="file" name="image" onChange={handleFileChange} /><br /><br />

        <input name="shortDescription" placeholder="Short Description" value={form.shortDescription} onChange={handleChange} /><br /><br />

        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea><br /><br />

        <textarea name="longDescription" placeholder="Long Description" value={form.longDescription} onChange={handleChange}></textarea><br /><br />

        <input name="tech" placeholder="Tech (comma separated)" value={form.tech} onChange={handleChange} /><br /><br />

        <input name="liveLink" placeholder="Live Link" value={form.liveLink} onChange={handleChange} /><br /><br />

        <textarea name="result" placeholder="Result" value={form.result} onChange={handleChange}></textarea><br /><br />

        <button type="submit">Add Project</button>

      </form>
    </div>
  );
}

export default AddProject;