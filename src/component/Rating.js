
function Rating ({numberOfStars, name, review}) {
    return (
        <>
            <p>Number of Stars: {numberOfStars}</p>
            <p>Name: {name}</p>
            <p>{review}</p>
        </>

    )
}

export default Rating