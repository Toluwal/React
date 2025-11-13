function ProfileCard() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
            <div className="flex flex-col items-center -mt-12">
                <img
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                    src="https://i.pravatar.cc/100"
                    alt="avatar"
                />
                <h2 className="text-xl font-semibold mt-2">Itunu Bisayo</h2>
                <p className="text-gray-500 text-sm">Data Analyst • Lagos, Nigeria</p>
                <div className="flex justify-around w-full mt-4 border-t border-b py-3">
                    <div className="text-center">
                        <p className="text-lg font-bold">1.2k</p>
                        <p className="text-gray-500 text-sm">Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold">320</p>
                        <p className="text-gray-500 text-sm">Posts</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold">5.1k</p>
                        <p className="text-gray-500 text-sm">Likes</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm px-6 mt-4 text-center">
                    Passionate about data storytelling and turning numbers into insights that drive business success.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full mt-4 mb-4 font-semibold hover:bg-green-700">
                    Follow
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;