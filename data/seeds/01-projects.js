
exports.seed = async function(knex) {
    await knex('projects').insert([
      {name: 'Learn Git', description: 'Learn how to commit'},
      {name: 'Flex', description: 'Learn to use flexbox', completed: true},
      {name: 'CSS', description: 'Learn cascading-style-sheets'},
    ]);
};