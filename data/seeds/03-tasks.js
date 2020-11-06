exports.seed = async function(knex) {
    await knex('tasks').insert([
          {description: 'Learn repositorys', project_id: 1, notes: "notes about repositorys"},
          {description: 'Learn, commits, pushes, and pull requests', project_id: 3, completed: true},
          {description: 'What is CSS, part 1', project_id: 3, completed: true},
          {description: 'What is CSS, part 2', project_id: 3, completed: false, notes: 'Learn more about CSS'},
          {description: 'Rewrite a past project with flexbox', project_id: 2},
          {description: 'Use media query breakpoints', project_id: 2, resources_id: 1},
        ]);
  };