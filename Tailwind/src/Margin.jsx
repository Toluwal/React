function MarginExamples() {
    return (
        <div className="bg-gray-100 p-8">
            <div className="bg-blue-500 m-4">Margin 4</div>
            <div className="bg-blue-500 m-8">Margin 8</div>
            
            <div className="bg-green-500 mt-8">Margin top 8</div>
            <div className="bg-green-500 mb-8">Margin bottom 8</div>
            
            <div className="bg-red-500 mx-auto w-48"> Centered with mx-auto</div>
            <div className="bg-purple-500 -mt-4"> Negative margin top</div>
        </div>
    );
}

export default MarginExamples;