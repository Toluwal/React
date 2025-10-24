function ProfileStats({projects, followers, following}) {
  const handleClick = () => {
    alert(`Button Clicked`);
  };

  return (
    <div className="profile-stats">
      <button onClick={() => handleClick('Projects', projects)}>Projects: {projects}</button>
      <button onClick={() => handleClick('Followers', followers)}>Followers: {followers}</button>
      <button onClick={() => handleClick('Following', following)}>Following: {following}</button>
    </div>
  );
}

export default ProfileStats;
