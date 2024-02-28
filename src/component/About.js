import chef_picture1 from "./../assets/images/chefs-mario-and-adrian_1.jpg"
import chef_picture2 from "./../assets/images/chefs-mario-and-adrian_2.jpg"

import "./About.css"

function About() {
    return(
        <section id = "about-section">
            <div className = "grid-wrapper">
                <div className = "grid-container about-grid-rows" >
                    <div id = "about-narrative">
                        <h1 className = "primary-color-yellow-text">Little Lemon</h1>
                        <h2 className = "primary-color-yellow-text">Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>  
                    </div>
                    <img className = "about-chef-photos" src = {chef_picture1} />
                    <img className = "about-chef-photos" src = {chef_picture2} />
                </div>
            </div>

        </section>
    )
}

export default About;