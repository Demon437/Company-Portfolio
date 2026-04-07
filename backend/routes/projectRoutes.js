// ======================= routes/projectRoutes.js =======================
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const {
  getProjects,
  getSingleProject,
  createProject,
} = require("../controllers/projectController");

router.get("/", getProjects);
router.get("/:id", getSingleProject);
router.post("/", upload.single("image"), createProject); 
router.post("/", auth, createProject);
router.post("/", upload.single("image"), createProject);

module.exports = router;
