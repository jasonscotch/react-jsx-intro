const Tweet = (props) => {
    return (
        <div>
            <h3>@{props.username} - {props.name}</h3>
            <p><i>{props.date}</i></p>
            <p>{props.message}</p>
        </div>
    )
}