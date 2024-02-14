
function MenuItem({item, price, description}) {
    return(
        <>
            <h3>{item}</h3>
            <h3>{price}</h3>
            <p>{description}</p>
        </>
    )
}

export default MenuItem;