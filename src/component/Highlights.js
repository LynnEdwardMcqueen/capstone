import MenuItemCard from "./MenuItemCard"
import greekSaladImage from "../assets/images/greek-salad-large.jpg"
import bruschettaImage from "../assets/images/bruschetta.jpg"
import penneImage from "../assets/images/penne.jpg"

import "./Highlights.css"

function Highlights() {
    let greekSaladDescription = "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    let bruchettaDescription = "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    let penneDescription = "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."

    return(
        <section id = "highlights-section" >
            <div className = "grid-wrapper">
                <div className = "grid-container" >
                    <h1 className = "primary-color-black-text" >This week's specials!</h1>
                    <button className = "primary-color-black-text primary-color-yellow">Online Menu</button>
                    <div>
                        <MenuItemCard item = "Greek Salad" price = "$12.99" description =  {greekSaladDescription} image = {greekSaladImage} />
                        <MenuItemCard item = "Bruchetta" price = "$5.99" description = {bruchettaDescription} image = {bruschettaImage} />
                        <MenuItemCard item = "Penne" price = "$14.99" description = {penneDescription} image = {penneImage} />
                    </div>

                 </div>

            </div>
        </section>
    )
}

export default Highlights;