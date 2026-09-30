import { tablazatData } from "../data/tablazat";

export function Tablazat() {
    return (
        <>
            <div className="row mb-1" id="mibolLehetMegPalinka">
                <div className="col-sm-12 kartya mb-3">
                <h2>Miből készülhet gyümölcspárlat?</h2>

                <table className="table table-bordered">
                    <tbody>
                        {tablazatData.map((row) => (
                            <tr>
                                {row.map((data) => (
                                    <td>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}