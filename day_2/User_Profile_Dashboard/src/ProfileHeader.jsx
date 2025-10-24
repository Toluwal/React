function ProfileHeader({name, title, avatar}) {
    return (
        <div className="profile-header">
        <img src={avatar} alt= {`${name}'s avatar `} className="profile-avatar"/>
        <h2>{name}</h2>
        <p>{title}</p>
       
        </div>
    );
}

export default ProfileHeader;