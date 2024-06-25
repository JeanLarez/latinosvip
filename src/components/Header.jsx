

const NavBar = () => {
  return (
    <div className="">
        <nav className="fixed inset-x-0 top-0 z-10 bg-white/85 backdrop-blur-sm">
            <ul className="mx-auto flex h-20 items-center justify-around">
                <li>NOSOTROS</li>
                <li>MENUS</li>
                <li>SALONES</li>
                <li>RESERVACIONES</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
