const Person = (props) => {
    let banner = props.age >= 18 ? "Please go vote!" : "You must be 18";
    let name;
    
    if (props.name.length <= 8 ) {
        name = props.name;
    } else {name = props.name.slice(0,6);}
    

    
    return (
        <div>
            <p>Learn some information about this person</p>
            
            <p>Name: {name}</p>
            <ul>{props.hobbies.map(h => 
                (
                    <li>{h}</li>
                )
            )}</ul>
            <h3>{banner}</h3>
        </div>
    )
}