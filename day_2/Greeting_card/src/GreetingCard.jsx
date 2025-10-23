
function GreetingCard({name, message, color= "#CBD99B"}) {
    return (
        <div style={{backgroundColor: color}} className="grtn_card"> 
            <h2>Hi, {name}</h2>
            <p>{message}</p>
        </div>
    );
}

export default GreetingCard;