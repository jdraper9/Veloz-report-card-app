var express = require('express');
var Students = require('../models/students');

var router = express.Router();

router.get('/', function (req, res) {
  Students.retrieveAll(function (err, cities) {
    if (err) return res.json(err);
    return res.json(students);
  });
});

router.post('/', function (req, res) {
  var student = req.body.student;

  Students.insert(student, function (err, result) {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
