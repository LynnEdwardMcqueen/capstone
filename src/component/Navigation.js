import logo from "./../assets/images/Logo.svg"
import "./Navigation.css"

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <img src = {logo} alt = "dessert" />

                </li>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#">About</a>
                </li>
                <li>
                    <a href = "#">Menu</a>
                </li>
                <li>
                    <a href = "#">Reservations</a>
                </li>
                <li>
                    <a href = "#">Order Online</a>
                </li>
                <li>
                    <a href = "#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;