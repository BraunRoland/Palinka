import { szovegek } from "../data/fontos";

export function Fontos() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                <div className="card">
                    <div className="card-header">Amit érdemes megjegyezni</div>

                    <div className="card-body">
                    <ul>
                        {szovegek.map((sz) => (
                            <li>{sz}</li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}