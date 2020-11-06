const express = require("express");
const db = require("../data/config.js");
const projects = require("./project-model.js");
const router = express.Router();

// PROJECTS
router.get("/projects", (req, res) => {
    projects.find()
        .then(projects => {
            res.status(200).json({ data: projects } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving projects." })
        })
});

router.get("/projects/:id", (req, res) => {
    const { id } = req.params;
  
    projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Error retrieving project with the specified ID." })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The project with the specified ID does not exist." });
    });
});

router.post("/projects/", (req, res) => {
    projects.add(req.body)
        .then(project => {
            res.status(200).json({ data: project });
        })   
        .catch(error => {
            console.log(error);
        })
});

// RESOURCES
router.get("/resources/", (req, res) => {
    projects.findResources()
        .then(resources => {
            res.status(200).json({ data: resources } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving resources." })
        })
});

router.post("/resources/", (req, res) => {
    projects.addResource(req.body)
        .then(resource => {
            res.status(200).json({ data: resource });
        })   
        .catch(error => {
            console.log(error);
        })
});

// TASKS
router.get("/tasks/:id", (req, res) => {
    const { id } = req.params;
    projects.findTasks(id)
        .then(tasks => {
            res.status(200).json({ data: tasks } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving tasks." })
        })
})

router.get("/tasks", (req, res) => {
    projects.findTaskAll()
        .then(tasks => {
            res.status(200).json({ data: tasks } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving tasks." })
        })
})

router.post("/tasks", (req, res) => {
    projects.addTask(req.body)
        .then(resource => {
            res.status(200).json({ data: task });
        })   
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;
