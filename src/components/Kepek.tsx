import type { kepekProps } from "../types/kepek";

export function Kepek(props: kepekProps) {
    return (
        <>
            <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
            <h2>{props.cim}</h2>

            <img src={props.imgPath} className="img-fluid" alt={props.cim} />

            <p className="mt-2">
                {props.tartalom}
            </p>
            </div>
        </>
    )
}