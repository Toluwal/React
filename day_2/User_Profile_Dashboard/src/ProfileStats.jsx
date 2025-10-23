function ProfileStats(projects, followers, following) {
    return (
        <div className="profile-stats">
            <p>{projects}</p>
            <p>{followers}</p>
            <p>{following}</p>
        </div>
    );
}

export default ProfileStats