exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', (table) => {
    table.increments()

    table.string('name')

    table.string('city')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artist')
}
