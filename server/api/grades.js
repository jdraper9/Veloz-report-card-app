var express = require('express');
var Grades = require('../models/grades');

var router = express.Router();

router.get('/', function (req, res) {
  Grades.retrieveAll(function (err, grades) {
    if (err) return res.json(err);
    return res.json(grades);
  });
});

router.post('/', function (req, res) {
  var grade = req.body.grade;

  Grades.insert(grade, function (err, result) {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
