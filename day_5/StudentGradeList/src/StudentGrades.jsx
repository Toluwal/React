import { useState } from "react";

function StudentGrades() {
  const students = [
    { name: "Chidi Okafor", subject: "Math", score: 75 },
    { name: "Amaka Johnson", subject: "Math", score: 45 },
    { name: "Tunde Adeyemi", subject: "Math", score: 88 },
  ];

  const [filter, setFilter] = useState("All");

  const filteredStudents = students.filter((student) => {
    if (filter === "Passed") return student.score >= 50;
    if (filter === "Failed") return student.score < 50;
    return true;
  });

  const passedCount = students.filter((s) => s.score >= 50).length;
  const failedCount = students.length - passedCount;

  return (
    <div>
      <h1>Student Grades</h1>

      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Passed")}>Passed</button>
        <button onClick={() => setFilter("Failed")}>Failed</button>
      </div>

      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student.name} - {student.subject}: {student.score}{" "}
            {student.score >= 50 ? (
              <span style={{ color: "green" }}> PASS</span>
            ) : (
              <span style={{ color: "red" }}> FAIL</span>
            )}
          </li>
        ))}
      </ul>

      <p>
        Total Students: {students.length} | Passed: {passedCount} | Failed:{" "}
        {failedCount}
      </p>
    </div>
  );
}

export default StudentGrades;
