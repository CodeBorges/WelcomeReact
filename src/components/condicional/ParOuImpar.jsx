import React, { useState } from "react";

export default _ => {
    const [isPar, SetValor] = useState('')
    const num = isPar % 2 === 0

    function quandoMudar(e){
        SetValor(e.target.value)
    }
    return (
        <div>
            <div>
                <label>Verifique se o valor que esta no PROPS é <strong>PAR</strong> ou <strong>ÌMPAR</strong></label>
                <div><input value={isPar} onChange={quandoMudar} placeholder="Insira um Número"></input></div>
            </div>

            <div>
                O numero inserido é:
                {num ?
                    <span> Par</span> : <span> Ímpar</span>}
            </div>
        </div>
    )
}