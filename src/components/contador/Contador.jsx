import React from "react";
import './Contador.css'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    
    setPasso = (evento) =>{
        this.setState({
            passo: +evento.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor=""><strong>Passo: </strong></label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}