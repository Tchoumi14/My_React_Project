/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Brice . I'm a computer science Student in Germany  with some experience in  CSS, Android, Java, HTML, Python, C/C++, Haskel, Mysql, and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with Kotlin , React, Gulp, Sass, Express JS, and Node JS</p>

            <p>My latest project.You can check it on my Github out <a href="https://github.com/Tchoumi14" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage</p>

            <p>When I'm not learning something new...I like to cook and Cooking for me it's like second passion after programming:)</p>
            </Content>
        </div>
    );

} 

export default AboutPage;




