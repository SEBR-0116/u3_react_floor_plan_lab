const Bedrooms = (props) => {
    return (
        <div className={`Bedroom ${props.member}`}>
            <h2> {props.member}'s Bedroom</h2>
        </div>
    )
}

export default Bedrooms