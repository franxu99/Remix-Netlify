import { getGuitarra } from "../models/guitarras.server"
import { useLoaderData, Link, useRouteError, useOutletContext } from "@remix-run/react"
import { useState } from "react"


export async function loader({params}){     //Nos devuelve el nombre de la guitarra que hemos seleccionado
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada',
            data: {}
        })
    }
    return guitarra
}

    //Manejo de errores
export function ErrorBoundary() {
     
    const error = useRouteError(); // Esto es un hook de remix
        
    return (
        <div>
            {/* De esta manera imprimimos los errores */}
            <p className="error">{error.status}  {error.statusText} </p>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal
            </Link>
        </div>
        )
}

export const meta = ({data}) => {
    if(!data){
        return [
            {
                title: 'Guitarra No Encontrada'
            },
            {
                descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada'
            }
    ]
    }
    return [{
            title: `GuitarLA - Remix ${data.data[0].attributes.nombre.toUpperCase()}`,
            descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre.toUpperCase()}`
        }
    ]
}


function Guitarra() {

    const {agregarCarrito} = useOutletContext();
    const [ cantidad, setCantidad ] = useState(0);
    const guitarra = useLoaderData();
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;

    const handleSubmit = e =>{
        e.preventDefault();
        if(cantidad < 1){
            alert('debes seleccionar una cantidad')
            return
        }
        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,     //Al ser el mismo nombre la clave y el valor no hace falta colocarlo dos veces
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada);
    }

  return (
    <div className="guitarra">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

        <div className="contenido">
            <h2>
                {nombre}
            </h2>
            <p className="descripcion">
                {descripcion}
            </p>
            <p className="precio">
                {precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
            </p>

            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="cantidad">Cantidad</label>

                <select name="" id="cantidad"
                onChange={e => setCantidad(parseInt(e.target.value))}>
                    <option value="">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value={'Agregar al Carrito'}/>
            </form>
        </div>
    </div>
  )
}

export default Guitarra