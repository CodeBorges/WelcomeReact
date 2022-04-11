import React from "react"

export default props => {
    const cb = props.clickOfMe
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5 

    return (
        <div>
            <div onClick={_ => cb('João', gerarIdade(), gerarNerd())}>
                <button>Fornecer Informações</button>
            </div>

        </div>
    )
}