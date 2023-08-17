import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Link,      //Se usa para importar css, fuentes de Google...
    Outlet,     //Genera rutas con los nombres de los archivos de la carpeta routes
    Scripts,    //Para que cargue con js y no cargue las paginas desde html con iconos de carga y flashes
    LiveReload,  //Recarga automáticamente la página cuando los archivos cambian durante el desarrollo
    useRouteError
    
} from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header';
import Footer from './components/footer'

export function meta(){
    return[
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ];
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,900;1,700&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){  

    //Comprobamos que este código es del lado del navegador(cliente), si es así si localStorage contiene algo se le añade,
    //sino un objeto vacío, y si se hace en el lado del servidor es null

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null  
    const [ carrito, setCarrito ] = useState(carritoLS);

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id) //filter retorna todos los elementos que coincidan con la condición
        setCarrito(carritoActualizado)
    }


    const agregarCarrito = guitarra => {
                   //Comprobar si la guitarra seleccionada se encuentra en el array de objetos del carrito
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){        //SOME itera sobre el array(carrito) y devuelve true o false
            const carritoActualizado = carrito.map(guitarraState => {       //Llegamos hasta el objeto e incrementamos la cantidad
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad += guitarra.cantidad;
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        }else{
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState;
        })
        setCarrito(carritoActualizado)
    }
    

    return(
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad, 
                    eliminarProducto
                }}
            />
        </Document>
    )
}


function Document({children}) {
  return (
    <html>
        <head lang='es-ES'>
            <Meta />
            <Links />
        </head>
        <body>
            <Header /> {/*Para que el header salga en todos las páginas*/}
            {children}
            <Footer /> 
            <Scripts />
            <LiveReload /> 
        </body>
    </html>
  )
}

// Manejo de errores

//Manejo de errores
export function CatchBoundary() {
    
    const error = useRouteError(); // esto es un hook de remix

    return (
        <Document>
            {/* de esta manera imprimimos los errores */}
            <p className="error">{error.status} {error.statusText} </p>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal
            </Link>
        </Document>
        )
   
 
}
 
