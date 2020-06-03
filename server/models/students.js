const db = require('../database');

class Students {
  static retrieveAll(callback) {
    db.query('SELECT full_name from students', function (err, res) {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(student, callback) {
    db.query(
      'INSERT INTO students (full_name) VALUES ($1)',
      [student],
      function (err, res) {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Students;
