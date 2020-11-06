const db = require("../data/config.js");

// PROJECTS

function find(){
    return db("projects");
};

function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}

function add(value){
    return db("projects")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

// RESOURCES
function findResources() {
    return db("resources");
}

function addResource(resource) {
    return db("resources")
        .insert("resource")
        .then(value => {
            return findResource(value);
        });
}

// TASKS
function findTasks(id) {
    return db("projects")
        .join("tasks as task", "projects.id", "task.project_id")
        .select("projects.name", "task.description")
        .where({ 'task.project_id': id })
}

function findTaskAll() {
    return db("tasks");
}

function addTask(value){
    return db("tasks")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

module.exports = {
    find,
    findById,
    add,
    findResources,
    addResource,
    findTasks,
    findTaskAll,
    addTask
};