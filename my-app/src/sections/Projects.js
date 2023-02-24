import "../styling/Projects.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'
import { Image } from "react-bootstrap";

const Projects = () => {

    
    return (
        
        <section className="projectsSection">
              <div className="cards">
              <h1 className="abouttitle">Projects</h1>


                <div className="first">
                <CardGroup className="group">

                    <Card className="card">
                        {/* <Card.Img variant="top" src="images/distributed_systems/design.jpg" style={{ width: "100rem", alignContent: "center"}}/> */}
                        <Image src="images/distributed_systems/design.jpg" className="distributed" />
                        <Card.Body>
                        <Card.Title>Ski Resort Distributed Systems</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> Leveraging cloud technologies to design a scalable distributed system.
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Jakarta EE(J2EE), Apache Tomcat, Redis, RabbitMQ, AWS, EC2, Elastic Load Balancing
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="footer">
                            <small>
                                <Button className="footer" variant="outline-primary" href="https://github.com/tifflastimosa/a3-distributed-systems-data-layer" target="_blank">GitHub</Button>
                                <Button className="footer" variant="outline-primary">Report</Button>
                            </small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Image src="images/pettin/thumbnail.jpg" className="pettin" />
                        <Card.Body>
                        <Card.Title>PetTin</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> An app where pets can match with other pets based on activities, play style, and more!
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Android Studio, Firestore, Google Maps API
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="footer">
                            <small>
                                <Button className="footer" variant="outline-primary">GitHub</Button>
                                <Button className="footer" variant="outline-primary">Demo</Button>
                            </small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Image src="images/travel_hub/thumbnail.jpg" className="travel" />
                        
                        <Card.Body>
                        <Card.Title>Travel Hub</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> A collaborative tool for friends and families to plan trips and schedule activies at their desired destination.
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Spring Boot, MongoDB, Node.js, React, Postman, GoogleOAuth
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="footer">
                            <small>
                                <Button className="footer" variant="outline-primary">GitHub</Button>
                                <Button className="footer" variant="outline-primary">Demo</Button>
                            </small>
                        </Card.Footer>
                    </Card>

                    </CardGroup>
                </div>

                <div className="second">
                <CardGroup>
                    <Card>
                        <Image src="images/movie_time/thumbnail.jpg" className="movie" />
                        <Card.Body>
                        <Card.Title>Movie Time</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> A movie database where users can search, review, and rank over 23,000 movies.
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Express, Node.js, React, Postman, GoogleOAuth
                        </Card.Text>
                        </Card.Body>
                        <small>
                                <Button className="footer" variant="outline-primary">GitHub</Button>
                                <Button className="footer" variant="outline-primary">Demo</Button>
                            </small>

                    </Card>

                    <Card>
                        <Image src="images/book_it/thumbnail.jpg" className="bookit" />
                        <Card.Body>
                        <Card.Title>Let's Book It API</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> A scheduler and planner API designed for event planners and small business owners to coordinate
                            events such as farmer's market or craft fairs.
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Spring Boot, MySQL, Postman
                        </Card.Text>
                        </Card.Body>
                        <small>
                                <Button className="footer" variant="outline-primary">GitHub</Button>
                                <Button className="footer" variant="outline-primary">API Documentation</Button>
                        </small>
                    </Card>

                    <Card>
                        <Image src="images/quantified_self/thumbnail.avif" className="quantified" />
                        <Card.Body>
                        <Card.Title>Quantified Self Web Application</Card.Title>
                        <Card.Text className="description">
                            <b>Info:</b> An application for users to query and visualize their data from wearable technology.
                        </Card.Text>
                        <Card.Text className="description">
                            <b>Technologies Used:</b> Spring Boot, React, Postman, CodeMR
                        </Card.Text>
                        </Card.Body>
                        <small>
                                <Button className="footer" variant="outline-primary">GitHub</Button>
                                <Button className="footer" variant="outline-primary">Demo</Button>
                            </small>
                    </Card>
                    
                    </CardGroup>
                </div>

            </div>

        

        </section>
    )
}

export default Projects