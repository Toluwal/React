import React, { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false)


return (
<nav className="flex items-center justify-between bg-green-700 text-white p-4">
<div className="text-xl font-bold">NaijaStore</div>
<ul className="hidden md:flex gap-6">
<li><a href="#">Home</a></li>
<li><a href="#">Shop</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>
</ul>
<div className="flex items-center gap-4">
<button className="bg-white text-green-700 px-3 py-1 rounded-lg">Login</button>
<button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
☰
</button>
</div>
{menuOpen && (
<div className="absolute top-16 left-0 w-full bg-green-600 flex flex-col items-center gap-4 p-4 md:hidden">
<a href="#">Home</a>
<a href="#">Shop</a>
<a href="#">Blog</a>
<a href="#">Contact</a>
</div>
)}
</nav>
);
}
export default Navbar;
