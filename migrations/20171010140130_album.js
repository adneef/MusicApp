exports.up = function(knex, Promise) {
  return knex.schema.createTable('album', (table) => {
    table.increments()

    table.string('title')

    table.integer('rating', 5)

    table
    .integer('artist_id')
    .references('id')
    .inTable('artist')
    .onDelete('cascade')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('album')
}
