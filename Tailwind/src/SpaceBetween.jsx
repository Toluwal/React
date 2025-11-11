function SpaceBetween() {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Vertical Space</h3>
            <div className="space-y-4">
                <div className="bg-blue-500 p-4">Item 1</div>
                <div className="bg-blue-500 p-4">Item 2</div>
                <div className="bg-blue-500 p-4">Item 3</div>
            </div>
             <h3 className="text-xl font-bold mb-4 mt-8">Horizontal Space</h3>
             <div className="flex space-x-4">
                <div className="bg-green-500 p-4">Item 1</div>
                <div className="bg-green-500 p-4">Item 2</div>
                <div className="bg-green-500 p-4">Item 3</div>
             </div>
        </div>
    );
}

export default SpaceBetween;