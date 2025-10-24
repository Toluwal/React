function SkillBadge({ skill, level }) {
  const levelColors = {
    Beginner: 'gray',
    Intermediate: 'blue',
    Expert: 'green',
  };

  return (
    <div
      className="skill-badge"
      style={{ backgroundColor: levelColors[level], color: 'white', padding: '8px', borderRadius: '6px', marginTop: '10px' }}
    >
      <h3>{skill}</h3>
      <p>Level: {level}</p>
    </div>
  );
}

export default SkillBadge;
