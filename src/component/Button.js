import "./Button.css"

function Button({message}) {
    return(
        <>
            <button className = {"primary-color-yellow highlight-color-black-text"} >{message}</button>
        </>
    )
}

export default Button;