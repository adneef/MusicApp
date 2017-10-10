exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {
          id: 1,
          name: 'Kishi Bashi',
          city: 'Tokyo'
        },
        {
          id: 2,
          name: 'Sam Beam',
          city: 'The South'
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('artist_id_seq', (SELECT MAX(id) FROM artist))")
        })
    })
}
