import Rating from "./Rating"

function Testimonials() {
    let alCaponeReview = "Whenever I am in the windy city, I love a little Bruchetta and spaghetti followed by a Lemon Dessert at the Little Lemon Restaurant."
    let michaelJordanReview = "I'm bullish on everything on the Little Lemon menu.  I love the gyros, and their Sicilian dishes are incredible."
    let mikeDitkaReview = "I absolutely love the Little Lemon.  A little lasagna follewed by a bit of baklava is the best Chicago has to offer."

    return(
        <section>
            Testimonials
            <h1>Testimonials</h1>
            <Rating numberOfStars = "5" name = "Al Capone" review = {alCaponeReview} />
            <Rating numberOfStars = "4" name = "Michael Jordan" review = {michaelJordanReview} />
            <Rating numberOfStars = "5" name = "Mike Ditka" review = {mikeDitkaReview} /> 
        </ section>
    )
}

export default Testimonials
