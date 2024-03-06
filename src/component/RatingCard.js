import "./RatingCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function RatingCard ({numberOfStars, name, review, photo}) {

    let createStarRating = numberOfStars => {
        console.log("Here in createStarRating")
        console.log(`numberOfStars = ${numberOfStars}`)
        let starArray = []
        for (let i = 0; i < numberOfStars; i++ ) {
            starArray.push(<FontAwesomeIcon key = {i} icon = {faStar} color = "#F4CE14" size = "sm" />);
        }
        return (
            <>
                {starArray}
            </>
        )
    }
    return (

        <div id = "rating-card" className = "highlight-color-off-white">
            {createStarRating(numberOfStars)}
            <div className = "flex-container">
                <img src = {photo} height = "50" width = "50" />
                <p className = "rating-font-size" style = {{display: "inline-block"}}> <strong> {name} </strong> </p>
            </div>
            <p className = "rating-font-size">{review}</p>
        </div>

    )
}

export default RatingCard