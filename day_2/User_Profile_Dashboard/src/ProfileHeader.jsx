function ProfileHeader(name, title, avatar) {
    return (
        <div>
        <h2>{name}</h2>
        <p>{title}</p>
        <img src={avatar} alt= {`${name} avatar `} className="profile-avatar"/>
        </div>
    );
}

export default ProfileHeader;