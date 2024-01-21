import { useEffect, useState } from 'react'

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
                    
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit) // Si viene con el {} actualizamos el form con ese {}
        } else {
            setForm(initialForm) // Si no viene con nada quiero que lo mantengas en su forma inicial
        }
    }, [dataToEdit]) // quiero que detectes cuando esto pasa de null -> {} y hagas un cambio en el form
    

    const handleChange = (e) => {
        setForm(form => {
            return { // retorna un objeto
                ...form,
                [e.target.name]: e.target.value
            }
        }) // Simplificacion de las dos funciones de abajo, usando name como comodin, esta en ambos input.
    }

    // const handleChangeName = (e) => {
    //     setForm(form => { // quiero que reciba el form y ejecute la siguiente estructura.
    //         return {      // mantenga una copia y a la prop name quiero que la sobre escriba con el valor que  
    //             ...form,  // hay en el input en ese momento  
    //             name: e.target.value
    //         }   // escribo en el input, detecta que escribi, ejecuta la funcion, la fx actualiza el estado
    //     })      // actualiza la prop name con el valor del input que estoy interactuando
    // }

    // const handleChangeConstellation = (e) => {
    //     setForm(form => { // lo mismo para constellation  
    //         return {
    //             ...form,
    //             constellation: e.target.value
    //         }
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault() // Con esto ya no se recarga cuando le doy enviar. Evito que se borre.
        if(!form.name) { // Si me faltan alguno de los datos.
            alert("Falta ingresar el nombre del caballero.")
            return
        }
        if (!form.constellation) {
            alert ("Falta ingresar la constelación del Caballero")
            return
        }
        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }

        handleReset() //Una vez hecha una carga de datos, con esto se reseteara el form.
    }

    const handleReset = () => { // vuelvo todos los datos involucrados en el form a su estado inicial (vacio)
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/> 
                <input type="text" name="constellation" placeholder="Constellation" onChange={handleChange} value={form.constellation}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form> 
        </div>
    ) // con los value en los input capturo el objeto que voy a editar (lo que viene de dataToEdit)
}

export default CrudForm