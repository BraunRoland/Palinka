import type { listaProps } from "../types/listak"

export function ListakUl(props: listaProps) {
    return(
        <>
            <div className="col-sm-4 kartya">
                <h2>{props.cim}</h2>
                <ul className="list-group">
                  {props.tartalom.map((elem) => (
                    <li className="list-group-item">{elem}</li>
                  ))}
                </ul>
            </div>
        </>
    )
}

export function ListakOl(props: listaProps) {
    return(
        <>
            <div className="col-sm-4 kartya">
                <h2>{props.cim}</h2>
                <ol className="list-group list-group-numbered">
                  {props.tartalom.map((elem) => (
                    <li className="list-group-item">{elem}</li>
                  ))}
                </ol>
            </div>
        </>
    )
}