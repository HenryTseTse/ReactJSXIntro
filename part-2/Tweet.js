const Tweet = (props) => (
    <div className="tweet">
        <h1>{props.name}</h1>
        <span className="username">{props.username}</span>
        <br></br>
        <span className="date">{props.date}</span>
        <h4>{props.message}</h4>
    </div>
)