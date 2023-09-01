import React from "react"
import background from "../assets/JON-EO.jpeg"
import {Container, container} from "react-bootstrap"
import "./Home.css"

// https://github.com/chetanverma16/react-portfolio-template/blob/main/components/WorkCard/index.js
// https://www.w3schools.com/howto/howto_css_image_text.asp

const Home = () => {
    return(
      <div>
        <section className="background-image">
          <div className="content">
            <h1>I discovered my passion for sound engineering at a young age, starting when I was just fifteen, mixing high school plays. <br/>
              Today, I am proud to be an international touring engineer, living my dream in the audio industry</h1>
            {/* <h2 className="m-auto">My journey into sound engineering was inspired by my father, who has dedicated forty-five years of his life to the entertainment industry. Notable experiences include an international tour with BLXST in 2022, a domestic tour with Emotional Oranges in 2023, and handling concerts for esteemed artists such as Moneybagg Yo, Kanye West, August 08, Ed Sheeran, and Gabriel's, among others.</h2>
            <h2 className="m-auto">As a sound engineer, I specialize in various areas, including Front of House Engineering, Monitor Engineering, and Playback Engineering. These roles have honed my skills in delivering exceptional sound experiences during live performances.</h2>
            <h2 className="m-auto">One of the most memorable moments in my career is when I initially worked a festival with BLXST, never imagining it would lead to becoming his lead audio engineer two years later.</h2> */}
          </div>
        </section>
      </div>
    );
}




export default Home