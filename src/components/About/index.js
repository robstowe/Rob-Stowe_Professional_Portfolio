import React from 'react';

import './style.css';

export default function About() {
    return(
        <div className="left">
            <div class="about-header">
                <h1>Hi, my name's Rob Stowe!</h1>
                <p>A little bit about myself..</p>
            </div>
            <div className="image-container">
                <img src={AboutPic} alt="Rob Stowe img"></img>
            </div>
            <div className="about">
                <p>I graduated from Fresno State University with a Mass Communications & Journalism degree with an emphasis on Advertising and marketing.</p>
                <p>I began my career working for one of the major ABC television News Networks joining the sales team. From there I then joined Amazon/Twitch and was a part of their Sales and Advertising team, working with key brands such as Warner Brothers, HBO, PlayStation, Activision, and others.</p>
            </div>
            <div className="other">
                <h2 className="about-other">Life outside of work..</h2>
                <ul>
                    <li>Want to talk about the NFL? I'm a huge 49ers fan and dive deep into Fantasy Football</li>
                    <li>Working at Twitch, gotta love video games right? I love RPGs, but my main love has always been Runescape.</li>
                    <li>I love to grill and cook. I made a beef wellington for Christmas once, it was fantastic but the amount of work... not worth.</li>
                    <li>Last but certainly not least, I have an amazing daughter named Blake. Like her favorite disney movies, she is a little princess.</li>
                </ul>
            </div>
        </div>
    )
}