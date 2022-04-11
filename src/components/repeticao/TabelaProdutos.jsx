import React from "react"
import '../../data/produtos'
import produtos from "../../data/produtos"
import './TabelaProdutos.css'

export default props => {

    const ListaProdutos = produtos.map((produtos, i) => {
        return (
            <tr key={produtos.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td> R${produtos.preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos}
                </tbody>
            </table>
        </div>
    )

}