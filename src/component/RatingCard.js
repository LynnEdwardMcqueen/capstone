import "./RatingCard.css"
function RatingCard ({numberOfStars, name, review, photo}) {

    return (
        <div id = "rating-card" className = "highlight-color-off-white">
            <p className = "rating-font-size"> <strong>{`${numberOfStars} out of 5`} </strong> </p>
            <div className = "flex-container">
                <img src = {photo} height = "50" width = "50" />
                <p className = "rating-font-size" style = {{display: "inline-block"}}> <strong> {name} </strong> </p>
            </div>
            <p className = "rating-font-size">{review}</p>
        </div>

    )
}

export default RatingCard