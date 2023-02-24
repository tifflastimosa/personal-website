import "../styling/About.css";
import { Image } from "react-bootstrap"

const About = () => {

    return (
        <section className="about">
            <div class="container mt-4 pt-4" id="aboutcontainer">

                <h1 id="subheader">About Me</h1>
            
                <div class="row mt-4">
                
                <div class="col-lg-4">
                    <img src="images/about/megizmopokemon.png" class= "imageAboutPage" alt="" />
                </div>

                <div class="col-lg-8">
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <ul className="subheader">
                                <li><b>Tiffany Lastimosa</b></li>
                                <li>Software Engineer</li>

                            </ul>
                        </div>
  
                    </div>
                    <div class="row mt-3" id="aboutparagraph">
                        <p>
                        <li className="skills"><b>Skills:</b> Java, JavaScript (ES6), C, Python, SQL, HTML, CSS</li>  
                        <li className="skills"><b>Databases:</b> MySQL, MongoDB, Firebase, Firestore, Redis</li>          
                        <li className="skills"><b>Frameworks | Libraries:</b> Spring Boot, React, Node.js, Express</li>          
                        <li className="skills"><b>IDE | Technologies:</b> IntelliJ, VS Code, Postman, Git, GitHub, Heroku, AWS, RabbitMQ, Linux, APIs</li>          
                        <li className="skills"><b>Process:</b> Agile Methodology, Scrum, Test Driven Development, Unit Testing, API Testing</li>             
                        </p>
                    </div>
                </div>
            </div>
        </div>
            

        </section>
    )
}

export default About