import React from "react";

export default (props) => {
    return (
        <div>
            <label htmlFor=""><strong>Passo: </strong></label>
            <input 
            type="number" 
            id="passoInput" 
            value={props.passo} 
            onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}