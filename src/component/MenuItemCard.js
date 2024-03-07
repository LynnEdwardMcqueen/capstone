import "./MenuItemCard.css"
import bike from "../assets/images/bike-logo.jpg"

function MenuItemCard({item, price, description, image}) {

    return(
        <div className = "menu-item-card highlight-color-off-white" >
            <img src = {image}  />
            <div className = "highlight-color-off-white"    >
                <div>
                    <h3 className = "primary-color-black-text ">{item}</h3>
                    <h3 className = "secondary-color-dark-tan-text">{price}</h3>
                </div>
                <p className = "description">{description}</p>
                <div>
                    <strong>Order a delivery</strong>
                    <img id = "delivery-image" src = {bike}  />
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;