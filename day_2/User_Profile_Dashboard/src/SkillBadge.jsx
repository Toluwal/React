function SkillBadge(skill, level) {
    return (
        <div>
            <h2>{skill}</h2>
            <ul>
                {skill.map(skill, index) => 
                <li key={index} className={`skill-card ${level[index]}`}>
                    {skill}
                </li>
                }
            </ul>
        </div>
    )
}