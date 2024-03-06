import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import monoLogo from "./../assets/images/MonoLogo.jpg";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css" integrity="sha512-8RxmFOVaKQe/xtg6lbscU9DU0IRhURWEuiI0tXevv+lXbAHfkpamD4VKFQRto9WgfOJDwOZ74c/s9Yesv3VvIQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function Footer() {
    return (
        <footer id = "footer-section" className = "primary-color-green" >
            <div className = "grid-container footer-grid-rows" >
                <div id =  "logo">
                    <img src = {monoLogo} />
                </div>
                <div id = "site-map" >
                    <h3 className = "highlight-color-off-white-text">SITE MAP</h3>
                    <ul className = "highlight-color-off-white-text" >
                        <li>
                            <a href = "#" >Home</a>
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
                    <h3 className = "highlight-color-off-white-text">Contact Info</h3>
                    <FontAwesomeIcon className = "facebook-icon" icon = {faSquarePhone} size = "xl" />
                    <p className = "highlight-color-off-white-text" style = {{display: "inline-block"}}>312-236-6296</p> <br></br>

                    <div id = "address-grid-container">
                        <div>
                            <FontAwesomeIcon className = "facebook-icon" icon = {faLocationDot} size = "xl" />
                        </div>
                        <p className = "highlight-color-off-white-text">The Little Lemon </p>
                        <p className = "highlight-color-off-white-text">815 Michigan Ave.</p>
                        <p className = "highlight-color-off-white-text">Chicago, Ill. 60610</p> 
                    </div>
                    <FontAwesomeIcon className = "facebook-icon" icon = {faEnvelope} size = "lg" />
                    <p className = "highlight-color-off-white-text" style = {{display: "inline-block", fontSize: "14px", margin: "0 0"}}>Mario@LittleLemon.com</p>
                </div>

                <div id = "social-media" >
                    <h3 className = "highlight-color-off-white-text">Social Media</h3>
                    <FontAwesomeIcon className = "facebook-icon" icon = {faFacebook} size = "xl" />
                    <FontAwesomeIcon className = "facebook-icon" icon = {faInstagram} size = "xl" />
                    <FontAwesomeIcon className = "facebook-icon" icon = {faTwitter} size = "xl" />
                    <FontAwesomeIcon className = "facebook-icon" icon = {faYoutube} size = "xl" />

                </div>
            </div>
        </footer>
    )
}

export default Footer;