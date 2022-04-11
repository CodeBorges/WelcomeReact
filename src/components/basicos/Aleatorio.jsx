import React from "react"

export default props => {
    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Minimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Resultado: </strong>{aleatorio}</p>
            <footer>
                <p><strong>ATENÇÃO: </strong>Atualize a pagina para gerar um novo numero!</p>
            </footer>
        </div>
    )
}