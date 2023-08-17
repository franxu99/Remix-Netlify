import { Outlet, useOutletContext } from "@remix-run/react"
import styles from "../styles/guitarras.css"


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

    {/*Hacemos Nested Routes para Guitarras entonces este archivo(PADRE) nos servirá como Layout para cargar estilos */}

function Tienda() {

  return (
    <main className="contenedor">
      <Outlet 
        context={useOutletContext()}
      />    {/*Esta etiqueta nos RENDERIZA las ROUTES HIJAS de este elemento */}
    </main>
  )
}

export default Tienda