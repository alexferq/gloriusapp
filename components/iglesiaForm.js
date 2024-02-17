import axios from 'axios';
import { useState } from 'react';
import Boton from './boton';
import { useRouter } from 'next/router';


export function IglesiaForm() {

    const [iglesia, setIglesia] = useState({
        nombre: "",
        pais: "",
        ciudad: "",
        direccion: "",
        telefono: ""
    });

    const handlerSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/iglesia/add', iglesia);
             console.log(response)
             router.push('/iglesia');
        } catch (error) {
            console.log(error.response)
        }
    }

    const handlerChange = ({target: {name, value}}) => {
        console.log(name, value)
        setIglesia({
            ...iglesia,
            [name]: value
        })
    }
    const router = useRouter();
    const salir = () => {
        router.push('/iglesia');
    }
  return (
    <div className="testbox">
            <center><h2>Formulario</h2></center><br/><br/>
          <label id="icon" >Nombre</label>
          <input type='text' name='nombre' onChange={handlerChange} /><br/>
          <label id="icon" >Pais</label>
          <input type='text' name='pais' onChange={handlerChange}/><br/>
          <label id="icon" >Ciudad</label>
          <input type='text' name='ciudad' onChange={handlerChange}/><br/>
          <label id="icon" >Direccion</label>
          <input type='text' name='direccion' onChange={handlerChange}/><br/>
          <label id="icon" >Telefono</label>
          <input type='text' name='telefono' onChange={handlerChange}/><br/>
          <a className="button" type='button' onClick={handlerSubmit}>Agregar</a>
          <Boton texto="Salir" tipoBoton="btn_salir" manejarClick={salir}  />
    </div>
  )
}



