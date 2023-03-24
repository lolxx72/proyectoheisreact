import CartWidget from "../CartWidget/cartwidget"

const NavBar = () => {
    return(
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <h3>Marie</h3>

            <div>
                <button>Mochilas</button>
                <button>Librería</button>
                <button>Agendas</button>
            </div>

<CartWidget />
        </nav>

    )
}

export default NavBar