const db = require('../database');

class Grades {
  static retrieveAll(callback) {
    db.query(
      'SELECT grade_id, semester, letter, courses.course_name FROM students INNER JOIN grades ON grades.student_id = students.student_id INNER JOIN courses ON grades.course_id = courses.course_id;',
      function (err, res) {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static insert() {}
}

module.exports = Grades;

// SELECT grade_id, semester, letter, courses.course_name
// FROM students
// INNER JOIN grades ON grades.student_id = students.student_id
// INNER JOIN courses ON grades.course_id = courses.course_id;
