const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/', function(req, res, next) {
  knex('artist')
    .select('*')
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id)

  knex('artist')
    .where('id', id)
    .first()
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.post('/', function(req, res, next) {
  const { name, city } = req.body

  if(!name || !city) {
    return res.sendStatus(400)
  }

  knex('artist')
    .insert({
      name: name,
      city: city
    }, '*')
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch((err) => next(err))
})

router.patch('/:id', function(req, res, next) {
  const id = Number(req.params.id)
  const { name, city } = req.body

  let responseObj = {}

  if(name) {
    responseObj.name = name
  }

  if(city) {
    responseObj.city = city
  }

  knex('artist')
  .update({
    name: name,
    city: city
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

  knex('artist')
  .delete()
  .where('id', id)
  .then(() => {
    return res.sendStatus(200)
  })
  .catch((err) => next(err))
})

module.exports = router
