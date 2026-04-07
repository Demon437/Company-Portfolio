const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const data = await Project.find();
  res.json(data);
};

exports.getSingleProject = async (req, res) => {
  const data = await Project.findById(req.params.id);
  res.json(data);
};


exports.createProject = async (req, res) => {
  try {
    console.log("BODY:", req.body);   // 🔍 debug
    console.log("FILE:", req.file)
    const data = req.body; // ✅ ye missing tha

    // ✅ tech parse
    if (data.tech) {
      data.tech = JSON.parse(data.tech);
    }

    // ✅ image path
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    const project = new Project(data);
    await project.save();

    res.json(project);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving project" });
  }
};