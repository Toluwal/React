function BorderWidth() {
    return (
        <div className="p-8 space-y-4">
            <div className="border p-4">Border (1px)</div>
            <div className="border-2 p-4">Border 2 (2px)</div>
            <div className="border-4 p-4">Border 4 (4px)</div>
            <div className="border-8 p-4">Border 8 (8px)</div>
            
            <div className="border-t-4 p-4">Top Border</div>
            <div className="border-r-4 p-4">Right Border</div>
            <div className="border-b-4 p-4">Bottom Border</div>
            <div className="border-l-4 p-4">Left Border 8</div>        
        </div>
        
    );
}

export default BorderWidth;