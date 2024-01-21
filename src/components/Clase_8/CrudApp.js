// CRUD => CREAR, LEER, EDITAR, ELIMINAR (acciones basicas del protocolo http)

import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import { useState, useEffect } from "react"
import axios from "axios"

const initialDb = [];

const CrudApp = () => {

    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null) // Como hago para capturar el caballero a editar
    // Al presionar editar, disparo setDataToEdit, esta debe capturar el objeto e insertarlo en la variable dataToEdit

    const readData = async () => {
        const ENDPOINT = "http://localhost:8000/santos";
        const response = await axios.get(ENDPOINT); // el metodo es GET, porque estamos leyendo
        const db = await response.data;

        setDb(db);
    }

    useEffect(() => {
        readData()
    }, [])


    const createData = async (data) => { // la info de (data) viene del form, pero no estoy recibiendo un formulario, estoy recibiendo su data, lo ponemos asi porque queda mejor.
        data.id = Date.now();  // defino un id para el nuevo caballero
        // necesito hacer una peticion de insercion: (de post). Defino el endpoint a donde voy hacer la peticion.
        const ENDPOINT = "http://localhost:8000/santos";

        const OPTIONS = { // el {} va a tener tres props.
            method: "POST", // el metodo a ejecutar
            headers: { "Content-type": "application/json" }, // indica en que tipo de notacion vamos a estar interactuando. Lo convierte para que el servidor la interprete.
            data: JSON.stringify(data) // stringify metodo que cadenea, trasforma la data que esta en json a texto plano, que es como lo recive el servidor.
        }

        await axios(ENDPOINT, OPTIONS); // Y ejecuto un post. El objeto options puede aparecer tambien como REQUEST, es un {} que creamos nosostros.

        readData(); // le decimos que vuelva a leer la data. De lo contrario no me apareceria a menos que recargue la pag.
    }
    const updateData = async (data) => {

        const {id} = data; // destructuring, extraigo el id del objeto data.

        const ENDPOINT = `http://localhost:8000/santos/${id}`; // es otro endpoint, el especifico que queremos editar.

        const OPTIONS = {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            data: JSON.stringify(data)
        }

        await axios(ENDPOINT, OPTIONS);

        readData(); // le decimos que vuelva a leer la data.
    }

    const deleteData = async (data) => {
        
        const {id, name, constellation} = data;

        const confirmar = confirm(`¿Seguro que quieres eliminar a ${name} de la constelación ${constellation}?`);

        if (confirmar) {
            const ENDPOINT = `http://localhost:8000/santos/${id}`;
    
            const OPTIONS = {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            }
            await axios(ENDPOINT, OPTIONS);
    
            readData();
        } else {
            return
        }
    }

    return (
        <>
            <h2>CRUD App</h2>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <CrudTable data={db}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
            />
        </>
    )
}

export default CrudApp