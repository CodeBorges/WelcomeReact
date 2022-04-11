import React, { useRef, useState } from "react";
import If, { Else } from './If'

export default _ => {
    const [nome, setNome] = useState('Convidado')

    function alteraNome(e){
        setNome(e.target.value)
    }

    return (
        <div style={{margin: 20}}>
            <div style={{margin: 10}} >
                <input placeholder="Insira seu Nome" onChange={alteraNome}/>
            </div>
                Seja Bem-vindo <strong>{nome}</strong>!
        </div>
    )
}