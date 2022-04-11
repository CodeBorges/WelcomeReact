import "./Card.css"
import React from "react";

export default props => {

    const CardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return (
        <div className="Card" style={CardStyle} >
            <div>
                <div className="Title">{props.titulo}</div>
            </div>
            <div className="Content">{props.children}</div>

        </div>
    )
}