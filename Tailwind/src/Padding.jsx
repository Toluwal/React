function PaddingExamples() {
    return (
        <div className="space-y-4">
            <div className="bg-blue-500 p-0">No Padding</div>
            <div className="bg-blue-500 p-2">Padding 2 (8px)</div>
            <div className="bg-blue-500 p-4">Padding 4 (16px)</div>
            <div className="bg-blue-500 p-8">Padding 8 (32px)</div>
            
            <div className="bg-green-500 pt-8">Padding top 8 (32px)</div>
            <div className="bg-green-500 pr-8">Padding right 8 (32px)</div>
            <div className="bg-green-500 pb-8">Padding bottom 8 (32px)</div>
            <div className="bg-green-500 pl-8">Padding left 8 (32px)</div>
            
            <div className="bg-red-500 px-8">Padding X (left & right)</div>
            <div className="bg-red-500 px-8">Padding Y (top & bottom)</div>



        </div>
    );
}

export default PaddingExamples;