import MenuItem from "./MenuItem"
function Highlights() {
    let greekSaladDescription = "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    let bruchettaDescription = "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    let lemonDessertDescription = "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."

    return(
        <section>
            Highlights
            <h1>This week's specials!</h1>
            <button>Online Menu</button>
            <MenuItem item = "Greek Salad" price = "$12.99" description =  {greekSaladDescription} />
            <MenuItem item = "Bruchetta" price = "$5.99" description = {bruchettaDescription} />
            <MenuItem item = "Lemon Dessert" price = "$5.00" description = {lemonDessertDescription} />
        </section>
    )
}

export default Highlights;