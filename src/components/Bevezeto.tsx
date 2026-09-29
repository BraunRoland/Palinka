import { bevezeto } from "../data/bevezeto"

export function Bevezeto() {
    return (
        <>
            <div className="row mb-2">
                <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">Mit érdemes tudni a pálinkáról?</div>

                    <div className="card-body">
                        {bevezeto.map((b)=>  (
                            <p>{b}</p>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}