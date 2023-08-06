import React, {useState} from 'react';
import "./About.css"
import img1 from '../assets/YT-182.jpeg'
import img2 from '../assets/IMG_0023.jpg'
import img3 from '../assets/IMG_0340.JPG'

// https://aguidehub.com/blog/2023-03-10-how-to-align-image-and-text-in-same-line-in-react/?utm_content=expand_article
// https://www.w3docs.com/snippets/css/how-to-vertically-align-text-next-to-an-image.html
const About = () => {
    return (
        <div>
            <div className="container">
                <div className="imageLeft">
                    <img
                        src={img1}
                        alt="Profile"
                    ></img>
                </div>
                <div className="text">
                    <p>
                        I started my journey as a sound engineer at the age of fifteen when I began mixing high school plays.<br/>
                        During the pandemic, I found myself working on final mixes for video shoots, which further fueled my passion for sound engineering.<br/>
                        Today, I am proud to say that I am an international touring engineer, living my dream in the audio industry.<br/>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="imageRight">
                    <img
                        src={img2}
                        alt="Profile"
                    ></img>
                </div>
                <div className="text">
                    <p>
                        The inspiration behind my career choice stems from my father, who has been a part of the entertainment industry for over forty-five years.<br/> 
                        These opportunities have allowed me to further refine my craft and gain exposure to diverse musical styles and production setups.<br/>
                        As a sound engineer, I specialize in several key areas. I excel as a Front of House Engineer, ensuring that the audience receives the best possible sound experience during live performances.<br/>
                        Additionally, I am skilled in Monitor Engineering, which involves creating optimal sound mixes for artists on stage, allowing them to hear themselves and their accompanying tracks clearly.<br/>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="imageLeft">
                    <img
                        src={img3}
                        alt="Profile"
                    ></img>
                </div>
                <div className="text">
                    <p>
                        Lastly, as a Playback Engineer, I am adept at managing and integrating pre-recorded audio elements into live performances seamlessly.<br/> 
                        One particularly memorable success story from my career is when I initially worked at a festival with BLXST, assuming it would be a one-time collaboration.<br/> 
                        However, two years later, I find myself serving as their lead audio engineer, a testament to the trust and recognition I earned through my hard work and dedication.<br/>
                        In terms of tools, I prefer working with DiGiCo and Avid Consoles. These software and hardware solutions offer exceptional quality and versatility, allowing me to achieve the desired sonic results for my clients and artists.<br/>
                        Sound engineering is not just a profession for me; My journey as a sound engineer has been incredibly fulfilling, and I look forward to the exciting opportunities and challenges that lie ahead.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}



export default About
