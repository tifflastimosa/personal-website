import "../styling/Home.css"
import { useRef } from "react"
import About from '../sections/About'

const Home = () => {

    return (
        <section id="home">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                        <h2 class="hero_title">Hello!</h2>
                        <h3 >My name is Tiffany and I design <b class="intro">impactful</b> software and <b class="intro">scalable</b> systems.</h3>
                    </div>
                </div>                

            </div>
       
        </section>

        
    )
}

export default Home