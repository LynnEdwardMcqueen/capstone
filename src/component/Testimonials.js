import RatingCard from "./RatingCard"
import "./Testimonials.css"
import AlCapone from "./../assets/images/al-capone.jpeg"
import MichaelJordan from "./../assets/images/michael-jordan.webp"
import MikeDitka from "./../assets/images/mike-ditka.jpeg"
import BarakObama from "./../assets/images/barak-obama.jpeg"

function Testimonials() {
    let alCaponeReview = "Whenever I am in the windy city, I love a little Bruchetta and one of the Little Lemon's excellent wines."
    let michaelJordanReview = "I'm bullish on everything on the Little Lemon menu.  I love the gyros, and their Sicilian dishes are incredible."
    let mikeDitkaReview = "I absolutely love the Little Lemon.  A little lasagna follewed by a bit of baklava is the best Chicago has to offer."
    let barakObamaReview = "I cannot say enough good things about the raviolli.  A true Chicago treasure."

    return(
        <section id = "testimonials" className = "primary-color-green">
                <h1 className = "highlight-color-off-white-text">Testimonials</h1>

                <div className = "testimonial-grid-container " >
                    <div id = "foo">
                        <RatingCard  numberOfStars = "5" name = "Al Capone" review = {alCaponeReview} photo = {AlCapone} />
                    </div>
                    <div id = "foo1">
                        <RatingCard numberOfStars = "4" name = "Michael Jordan" review = {michaelJordanReview} photo = {MichaelJordan} />
                    </div>
                    <div id = "foo2">
                        <RatingCard numberOfStars = "5" name = "Mike Ditka" review = {mikeDitkaReview} photo = {MikeDitka}/>
                    </div>
                    <div id = "foo3">
                        <RatingCard numberOfStars = "4" name = "Barak Obama" review = {barakObamaReview} photo = {BarakObama} />
                    </div>
 

 
                </div>
        </ section>
    )
}

export default Testimonials
