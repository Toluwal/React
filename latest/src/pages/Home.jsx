import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home() {
    const [searchQuery, setQuery] = useState("");
    const movies = [
        { id:1, title: "John Wick", release_date:"2020"},
        { id:2, title: "Sunrise", release_date:"1985"},
        { id:3, title: "Visa on Arrival", release_date:"2024"},
        { id:4, title: "Template", release_date:"2014"}
    ]

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        <button type="submit"></button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (
            movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}