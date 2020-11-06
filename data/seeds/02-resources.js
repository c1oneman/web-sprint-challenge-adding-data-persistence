
exports.seed = async function(knex) {
    await knex('resources').insert([
      {name: 'TL', description: 'Get help from a TL at Lambda'},
      {name: 'Afterhours', description: 'Help after learning hours'},
      {name: 'Internet', description: 'Just google it lmao.'},
      {name: 'Gmail', description: 'Phone a friend for help'}
    ]);
};