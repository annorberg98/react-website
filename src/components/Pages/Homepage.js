import React from 'react';
import {Card} from 'react-bootstrap';
import SkillList from '../Skill/Skilllist';
import Footer from '../Footer/Footer';

export default function Homepage(props){
    return (
        <div>
            <header id="header">
                <Card id="header-content">
                    <Card.Body>
                    <h1>
                        <span className="first-letter" id="letter-a">A</span>nton <span className="first-letter" id="letter-n">N</span>orberg
                    </h1>
                    <h2>Fullstack Web Developer</h2>
                    </Card.Body>
                </Card>
            </header>
            <main>
                <section className="card card-body" id="sectionOne">
                    <h4 className="sectionOne-content">Who Am I?</h4>
                    {/*<h5 className="sectionOne-content">This is my personal website, functioning as my Webportfolio.</h5> */}   
                </section>
                <section className="content" id="WhoAmI">
                    <div className="row">
                    <div className="col-lg-6">
                        <img src="assets/coding.jpeg" alt="PlaceholderImage" className="img-fluid" />
                    </div>
                    <div className="col-lg-6" id="whoAmIContent">
                        <Card id="about-me-card">
                            <Card.Body>
                            <p>
                                I am a student at Malmö University, doing 3rd and final year at the Information Architect Programme.
                                This programme allows me to gain a lot of knowledge in the different areas of Software Development sush as
                                Front and Backend Development, Database design, Security and Usability.
                            </p>
                            <p>
                                Alltough my heart is at the Backend, I do enjoy programming in the Frontend aswell.
                            </p>
                            <p>
                                I strive to be a true polyglot, knowing many different Programming languanges. I allways keep up to date with
                                the latest news in the industry, contsamtly learning new technologies.
                            </p>
                            <p>
                                I have a huge interest in Information -and Cyber Security. 
                            </p>
                            </Card.Body>
                        </Card>
                    </div>
                    </div>
                </section>
                <section className="card card-body" id="skills">
                </section>
                <section className="content" id="competences">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <SkillList tech="Web" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <SkillList tech="Programming" />
                        </div>
                    </div>
                </section>
                <section className="card card-body" id="contact">
                    <h4 className="contact-content">
                    Contact
                    </h4>
                    <div id="contact-list">
                        <div className="row">
                            <div className="col-3">
                                <h5>
                                    <a href="mailto:me@antonnorberg.se" target="_blank" rel="noopener noreferrer" className="contact-icons">
                                    <i className="fas fa-envelope"></i>
                                    </a>
                                </h5>
                                <p><a href="mailto:me@antonnorberg.se">me@antonnorberg.se</a></p>
                            </div>
                            <div className="col-3">
                                <h5>
                                    <a href="https://www.linkedin.com/in/anton-norberg/" target="_blank" rel="noopener noreferrer" className="contact-icons">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </h5>
                                <p><a href="https://www.linkedin.com/in/anton-norberg/">Anton Norberg</a></p>
                            </div>
                            <div className="col-3">
                                <h5>
                                    <a href="https://github.com/annorberg98/" target="_blank" rel="noopener noreferrer" className="contact-icons">
                                    <i className="fab fa-github"></i>
                                    </a>
                                </h5>
                                <p><a href="https://github.com/annorberg98/">annorberg98</a></p>
                            </div>
                            <div className="col-3">
                                <h5>
                                    <a href="https://goo.gl/maps/WLqvkF2FNBQJGq7b9" target="_blank" rel="noopener noreferrer" className="contact-icons">
                                    <i className="fas fa-map-marked-alt"></i>
                                    </a>
                                </h5>
                                <p><a href="https://goo.gl/maps/WLqvkF2FNBQJGq7b9" target="_blank" rel="noopener noreferrer">Malmö, Sweden</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content" id="personalSection">
                    <h1>Want to check out my projects?</h1>
                    <p><a href="#projects">Click here!</a></p>
                </section>
            </main>
            <Footer />
        </div>
    );
}