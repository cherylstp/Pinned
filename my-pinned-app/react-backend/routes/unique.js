var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Map = require('../models/UniqueMap.js');

/* GET ALL Map */
router.get('/', function(req, res, next) {
    Map.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  
  /* GET SINGLE BOOK BY Map */
  router.get('/:id', function(req, res, next) {
    Map.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE Map */
  router.post('/', function(req, res, next) {
    Map.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Map */
  router.put('/:id', function(req, res, next) {
    Map.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Map */
  router.delete('/:id', function(req, res, next) {
    Map.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;