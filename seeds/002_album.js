exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert([
        {
          id: 1,
          title: '151A',
          rating: '5',
          artist_id:1
        },
        {
          id: 2,
          title: 'Ghost on Ghost',
          rating: '5',
          artist_id: 2
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('album_id_seq', (SELECT MAX(id) FROM album))")
        })
    })
}
