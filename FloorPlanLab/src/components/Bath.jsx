const Bath = (props) => {
    return (
        <div className={`Bath ${props.size}`}>
            <h2> {props.size} Bath</h2>
        </div>
    )
}

export default Bath