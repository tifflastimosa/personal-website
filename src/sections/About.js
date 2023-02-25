import "../styling/About.css";
import { Image } from "react-bootstrap"

const About = () => {

    return (
        <section className="about">
            <div class="container mt-4 pt-4" id="aboutcontainer">

                <h1 id="aboutmeheader">About Me</h1>
            
                <div class="row mt-4">
                
                <div class="col-lg-4">
                    <img src="images/about/megizmopokemon.png" className="imageme" alt="" />
                </div>

                <div class="col-lg-8">
                    
                    <div class="row mt-3" className="tiffany">
                        {/* <ul className="subheader"> */}
                            <h3><b>Tiffany Lastimosa</b></h3>
                            Software Engineer
                        {/* </ul> */}
                    </div>

                    <div class="row mt-3" id="aboutparagraph">
                        <p>
                        <li className="skills"><b>Languages:</b> Java, JavaScript (ES6), C, Python, SQL, HTML, CSS</li>  
                        <li className="skills"><b>Databases:</b> MySQL, MongoDB, Firebase, Firestore, Redis</li>          
                        <li className="skills"><b>Frameworks | Libraries:</b> Spring Boot, React, Node.js, Express</li>          
                        <li className="skills"><b>IDE | Technologies:</b> IntelliJ, VS Code, Postman, Git, GitHub, Heroku, AWS, RabbitMQ, Linux, APIs</li>          
                        <li className="skills"><b>Process:</b> Agile Methodology, Scrum, Test Driven Development, Unit Testing, API Testing</li>             
                        </p>
                        <p className="summary">I am a former Paralegal turned Software Engineer! I graduated December 2022 with a master's degree in computer science and currently seeking opportunities in fullstack 
                        and backend development.
                        </p>

                        <p className="summary">My career transition began when I implemented case management software to automate document drafting, reduce duplicate information, and
                        integrate data sharing to improve workflow and efficiency. Through this experience I found my passion for creating impactful software. </p>

                        <p className="summary">Outside of Software Engineering, I love hanging out with my dog named Gizmo, playing tennis, playing board games, and traveling to new places with my friends and 
                        family. </p>

                        <p>Please feel free to connect with me on <a href="https://www.linkedin.com/in/tiffanylast" target="_new">LinkedIn</a> or at <a href="mailto:lastimosa.ti@gmail.com">lastimosa.ti@gmail.com.</a></p>

                        <ul>
                            <li><a href="https://github.com/tifflastimosa" target="_new"><Image src="images/icons/github.png" className="icons" /></a></li>
                            <li><a href="https://www.linkedin.com/in/tiffanylast" target="_new"><Image src="images/icons/linkedin.png" className="icons" /></a></li>
                            <li><a href="mailto:lastimosa.ti@gmail.com"><Image src="images/icons/mail.png" className="icons"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            

        </section>
    )
}

export default About