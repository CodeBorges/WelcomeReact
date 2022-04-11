export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p> o Aluno
                <strong> {props.aluno} </strong>
                tem nota {props.nota} e
                esta {status}!
            </p>

        </div>
    )
}