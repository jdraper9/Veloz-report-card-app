import React from 'react';

const CourseTable = (props) => {
  const { courses } = props;
  return (
    <tbody>
      {courses.map((course, i) => (
        <tr key={i}>
          <td className="grade-table">{course[0]}</td>
          <td className="grade-table">{course[1]}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default CourseTable;
