import React from "react";

const TeacherDashboardDetails = ({ index, student }) => {
    const { name, email } = student;
  return (
    <tr>
    <th>{index + 1}</th>
    <td>{name}</td>
    <td>{email}</td>
  </tr>
  );
};

export default TeacherDashboardDetails;
