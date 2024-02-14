import "./Footer.css"
import logo from "./../assets/images/Logo.svg"

function Footer() {
    return (
        <footer>
            <ul>
                Doormat Navigation
                <li>
                    <img id = "rotate" src = {logo} width = "221" height = "290" alt = "Big Logo" />
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

            <h3></h3>
            <ul>
                
            </ul>
            Footer
        </footer>
    )
}

export default Footer;