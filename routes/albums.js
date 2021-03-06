const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/', function(req, res, next) {
  knex('album')
    .select('*')
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id)

  knex('album')
    .where('id', id)
    .first()
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.post('/', function(req, res, next) {
  const { title, rating, artist_id } = req.body

  if(!title || !rating || !artist_id) {
    return res.sendStatus(400)
  }

  knex('album')
    .insert({
      title: title,
      rating: rating,
      artist_id: artist_id
    }, '*')
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.patch('/:id', function(req, res, next) {
  const id = Number(req.params.id)
  const { title, rating, artist_id } = req.body

  let responseObj = {}

  if(title) {
    responseObj.title = title
  }

  if(rating) {
    responseObj.rating = rating
  }

  if(artist_id) {
    responseObj.artist_id = artist_id
  }

  knex('album')
  .update({
    title: title,
    rating: rating,
    artist_id: artist_id
  },'*')
  .where('id', id)
  .then((data) => {
    res.status(200)
    return res.send(data)
  })
  .catch((err) => next(err))
})

router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id)

  knex('album')
  .delete()
  .where('id', id)
  .then(() => {
    return res.sendStatus(200)
  })
  .catch((err) => next(err))
})

module.exports = router
