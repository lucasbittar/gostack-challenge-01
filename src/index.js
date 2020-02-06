const express = require('express');

const server = express();

server.use(express.json());
server.use(logRequests);

const projects = [];

// Log middleware
function logRequests(req, res, next) {
  console.count('Request Counter');

  // Not requested by challenge, it's just for me :)
  console.log(`METHOD: ${req.method} | Path: ${req.path}`);

  return next();
}

// Check if project ID exists
function checkProjects(req, res, next) {
  const { id } = req.params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return res.status(400).json({ error: 'Invalid project ID' });
  }

  return next();
}

// Fetch projects
server.get('/projects', (req, res) => res.json(projects));

// Create a project
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const newProject = {
    id,
    title,
    tasks: [],
  };

  projects.push(newProject);
  return res.json(newProject);
});

// Remove a project
server.delete('/projects/:id', checkProjects, (req, res) => {
  const { id } = req.params;

  const project = projects.find((p) => p.id === parseInt(id));
  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));

  projects.splice(projectIndex, 1);

  return res.json({
    message: `Project with ID ${project.id} was succesfully removed!`,
  });
});

// Edit a project
server.put('/projects/:id', checkProjects, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((p) => p.id === parseInt(id));

  project.title = title;

  return res.json(project);
});

// Create a task within a project
server.post('/projects/:id/tasks', checkProjects, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((p) => p.id === parseInt(id));

  project.tasks.push(title);

  return res.json(project);
});

// Start server at port 3001
server.listen(3001);
