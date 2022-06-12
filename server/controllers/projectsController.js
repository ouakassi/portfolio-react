const Project = require("../models/projectModel");
const asyncHandler = require("express-async-handler");
// Get project
// Get /api/projects
// Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.status(200).json(projects);
});

// set project
// Post /api/projects
// Private
const setProject = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.imgurl ||
    !req.body.tags ||
    !req.body.github ||
    !req.body.website
  ) {
    res.status(400);
    throw new Error("please fill them all");
  }
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

// update project
// Put /api/projects:id
// Private
const updateProject = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);

  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }

  const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, {
    new: true,
  });
  res.status(202).json(updatedProject);
});

// delete project
// Delete /api/project:id
// Private
const deleteProject = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);

  if (!project) {
    res.status(400);
    throw new Error("project not found");
  }

  const deletedProject = await Project.findByIdAndDelete(projectId);
  res.status(202).json({ id: deletedProject.id });
});

module.exports = {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
};
