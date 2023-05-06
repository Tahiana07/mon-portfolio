import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../assets/styles/competences.css'
/*import reactjs from '../assets/images/reactjs.png'
import tkinter from '../assets/images/tkinter.png'
import python from '../assets/images/python.png'
import php from '../assets/images/php.png'
import java from '../assets/images/java.png'
import Javascript from '../assets/images/javascript.png'
import vuejs from '../assets/images/vuejs.png'
import threejs from '../assets/images/threejs.png'
import csharp from '../assets/images/csharp.png'
import javamobile from '../assets/images/java-mobile.png'
import ruby from '../assets/images/ruby.png'
import htmlcss from '../assets/images/html-css.png'*/
import p55 from '../assets/images/55.png'
import p60 from '../assets/images/60.png'
import p65 from '../assets/images/65.png'
import p70 from '../assets/images/70.png'

const Competences = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <>
            <div className="comp">
                <div className="container">
                    <h1>Programmations</h1>
                    <p>Je vous présente ci-dessous mes compétences en programmation</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={ p65 } alt="reactjs" />
                            <h4>ReactJS</h4>
                        </div>
                        <div className="item">
                            <img src={ p65 } alt="tkinter" />
                            <h4>Tkinter</h4>
                        </div>
                        <div className="item">
                            <img src={ p60 } alt="python" />
                            <h4>Python</h4>
                        </div>
                        <div className="item">
                            <img src={ p60 } alt="php" />
                            <h4>PHP</h4>
                        </div>
                        <div className="item">
                            <img src={ p55 } alt="java" />
                            <h4>Java</h4>
                        </div>
                        <div className="item">
                            <img src={ p60 } alt="javascript" />
                            <h4>Javascript</h4>
                        </div>
                        <div className="item">
                            <img src={ p55 } alt="vuejs" />
                            <h4>VueJS</h4>
                        </div>
                        <div className="item">
                            <img src={ p60 } alt="threejs" />
                            <h4>Three.js</h4>
                        </div>
                        <div className="item">
                            <img src={ p55 } alt="csharp" />
                            <h4>C#</h4>
                        </div>
                        <div className="item">
                            <img src={ p70 } alt="html-css" />
                            <h4>HTML & CSS</h4>
                        </div>
                        <div className="item">
                            <img src={ p55 } alt="java-mobile" />
                            <h4>Java mobile</h4>
                        </div>
                        <div className="item">
                            <img src={ p65 } alt="laravel" />
                            <h4>Laravel</h4>
                        </div>
                        <div className="item">
                            <img src={ p55 } alt="ruby" />
                            <h4>Ruby</h4>
                        </div>
                    </Carousel>
                </div>   
            </div>
        </>
    )
}

export default Competences