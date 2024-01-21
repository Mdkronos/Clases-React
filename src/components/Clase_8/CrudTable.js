
import CrudTableRow from './CrudTableRow'

import React from 'react'

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constellation</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 && (
                            <tr>
                                <td colSpan="3">Sin datos temporalmente</td>
                            </tr>
                        )
                    }
                    {
                        data.length !== 0 && (
                            data.map((caballero) => (<CrudTableRow 
                                key={caballero.id} 
                                caballero={caballero} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData} />)
                            ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default CrudTable



