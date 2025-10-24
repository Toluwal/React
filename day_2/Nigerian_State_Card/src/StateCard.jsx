function StateCard({state, capital, region, population}) {
    const regionColors = {
        'North': `#8B4513`,
        'South': `#008751`,
        'East': `#FFD700`,
        'West': `#4169E1`
    };
    return(
       <div className="statecard" style={{backgroundColor: regionColors[region]}}>
        <h3>{state}</h3>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population.toLocaleString()}</p>
       </div>
    );
}

export default StateCard