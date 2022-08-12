import React, { useEffect, useState } from "react";
import TeacherDashboardDetails from "./TeacherDashboardDetails";

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
    console.log(students);
  useEffect(() => {
    fetch("https://techo-kids-server-production.up.railway.app/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map((student, index)=> <TeacherDashboardDetails key={student._id} student={student} index={index}></TeacherDashboardDetails>)
      }
     
    </tbody>
  </table>
</div>
  );
};

export default TeacherDashboard;
