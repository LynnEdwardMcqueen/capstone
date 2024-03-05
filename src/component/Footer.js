import "./Footer.css"
import logo from "./../assets/images/Logo.svg"

function Footer() {
    return (
        <footer id = "footer-section" className = "primary-color-green" >
            <div className = "grid-container footer-grid-rows" >
                <div id =  "logo">
                    <img id = "rotate" src = {logo} width = "221" height = "290" alt = "Big Logo"  />
                </div>
                <div id = "site-map">
                    <ul>
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
                </div>

                <div id = "contact-info">
                    Contact Info
                </div>

                <div id = "social-media" >
                    Social Media
                </div>
            </div>
        </footer>
    )
}

export default Footer;