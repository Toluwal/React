function StateCard(state, capital, region, population) {
    return(
       <div className="statecard">
        <p>{state}</p>
        <p>{capital}</p>
        <p>{region}</p>
        <p>{population}</p>
       </div>
    );
}

export default StateCard