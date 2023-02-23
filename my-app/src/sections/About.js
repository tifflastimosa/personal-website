import "../styling/About.css"

const About = () => {

    return (
        <section id="aboutSection" className="secondary-selection">
            
            <div className="container">

                <h2 className="sectionHeading">Hello!</h2>

                {/* <h3>My name is Tiffany and I design <b>impactful</b> software and <b>scalable</b> systems.</h3> */}

                <div className="left">

                    <h3>My name is Tiffany and I design <b>impactful</b> software and <b>scalable</b> systems.</h3>

                    <p>
                    Lorem  ipsum dolor sit amet consectetur adipisicing e lit. Hic optio dolorum exercitationem, harum repellat
                    explicabo quis error excepturi porro soluta.
                    </p>

                    <p>
                    Lorem  ipsum dolor sit amet consectetur adipisicing e lit. Hic optio dolorum exercitationem, harum repellat
                    explicabo quis error excepturi porro soluta.
                    </p>

                    <p>
                    Lorem  ipsum dolor sit amet consectetur adipisicing e lit. Hic optio dolorum exercitationem, harum repellat
                    explicabo quis error excepturi porro soluta.
                    </p>

                    <p>
                    Lorem  ipsum dolor sit amet consectetur adipisicing e lit. Hic optio dolorum exercitationem, harum repellat
                    explicabo quis error excepturi porro soluta.
                    </p>
                </div>

                <div className="right">
                    <img src="images/about/circle-headshot.jpg" className="headshot" />                                   
                </div>
            
            
            </div>
           
        </section>
    )
}

export default About