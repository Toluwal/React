function Button() {
    return (
        <div className="max-w-lg mx-auto flex flex-wrap gap-4 justify-center">
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold">Primary</button>
            <button className="bg-white border-2 border-green-600 text-green-600 px-5 py-2 rounded-lg font-semibold">Secondary</button>
            <button className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">Danger</button>
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold">Success</button>
            <button className="bg-green-700 text-white px-7 py-3 text-lg rounded-lg font-semibold">Large</button>
            <button className="bg-green-700 text-white px-3 py-1 text-sm rounded-lg font-semibold">Small</button>
        </div>
    );
}

export default Button;