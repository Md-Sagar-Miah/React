

function Card(props){
    return <div className="card">
            <h2 className="cardHead">{props.titleText}</h2>
            <p className="cardBody">{props.bodyText}</p>
            <p className="cardFooter">{props.footerText}</p>

    </div>

}

export default Card;