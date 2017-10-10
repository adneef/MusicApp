'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/music_app'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/music_app-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
