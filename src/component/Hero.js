import bruschetta from "./../assets/images/bruschetta-tray-small.jpg"
import "./Hero.css"
import Button from "./Button"

function Hero() {
    return(
        <section id = "hero-section" class = "primary-color-green" >
                <div className = "grid-container" >
                    <div id = "hero-text">
                        <h1 id = "hero-title" className = "primary-color-yellow-text">Little Lemon</h1>
                        <h2 id = "hero-subtitle" className = "highlight-color-off-white-text" >Chicago</h2>
                        <p id = "hero-description" className = "highlight-color-off-white-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Button id = "reservation-button" className = "primary-color-yellow primary-color-black-text" message = "Reserve a Table" />
                    </div>

                    <div id = "hero-image-container">
                        <img src = {bruschetta} id = "hero-image"    />
                    </div>
                </div>
       </section>
    )
}

export default Hero