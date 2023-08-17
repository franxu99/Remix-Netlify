import { Link, useLocation } from "@remix-run/react"
import imagen from "../../public/img/carrito.png"
function Navegacion() {

    const location = useLocation(); //Hook que nos devuelve el pathname(nombre URL) para saber en que page estamos
    
  return (
    <nav className='navegacion'>
        <Link
            to={'/'}
            className={location.pathname === '/' ? 'active' : ''}
        >
            Inicio
        </Link>
        <Link
            to={'/nosotros'}
            className={location.pathname === '/nosotros' ? 'active' : ''}
        >
            Nosotros
        </Link>
        <Link
            to={'/guitarras'}
            className={location.pathname === '/guitarras' ? 'active' : ''}
        >
            Tienda
        </Link>
        <Link
            to={'/posts'}
            className={location.pathname === '/posts' ? 'active' : ''}
        >
            Blog
        </Link>
        <Link
            to={'/carrito'}
        >
            <img src={imagen} alt="Carrito de compras" />
        </Link>
    </nav>
  )
}

export default Navegacion