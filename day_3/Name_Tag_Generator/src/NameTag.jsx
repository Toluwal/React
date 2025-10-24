import { useState } from "react";
function NameTag() {
const [name, setName]  = useState('');
const [title, setTitle] = useState('');
const [company, setCompany] = useState('');

// function download() {
//     setName()
//     setTitle()
//     setCompany()
// }

return (
    <div>
        <input type="text" 
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text" 
        placeholder=" Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" 
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        />
        <h1>--- NAME TAG ---</h1>
        <p>Hello, my name is {name}</p>
        <p>Title: {title}</p>
        <p>Company: {company}</p>
        {/* <button onClick={download} className="download-btn">download</button> */}
    </div>
);

}

export default NameTag;