import React from 'react';
import './skills.css'
import html5 from '../../img/bxl-html5.svg';
import css3 from '../../img/bxl-css3.svg';
import js from '../../img/bxl-javascript.svg';
import reactjs from '../../img/bxl-react.svg';
import sass from '../../img/bxl-sass.svg';
import github from '../../img/icongithubDos.png';
import nodejs from '../../img/bxl-nodejs.svg';
import mongo from '../../img/mongodb.png';
import typescript from '../../img/typescript.png';
import webpack from '../../img/webpack.png';
import gatsby from '../../img/gatsby.png';

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="backba">
                <h3>Skills</h3>
                <div className="main_skills" data-aos="zoom-in-up">
                    <div className="dominio">
                        <h4>Tecnologias de dominio</h4>
                        <ul>
                            <li>
                                <div>
                                    <img src={html5} alt="html5" />
                                </div>
                            </li>
                            <li>
                                <div><img src={css3} alt="css3" /></div>
                            </li>
                            <li>
                                <div>
                                    <img src={js} alt="java script" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={reactjs} alt="react js" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={sass} alt="sass" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={github} alt="github" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={nodejs} alt="node js" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img className="mongo" src={mongo} alt="mongo db" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="studying">
                        <h4>En curso</h4>
                        <ul>
                            <li>
                                <div>
                                    <img src={typescript} alt="ts" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={webpack} alt="webpack" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={gatsby} alt="gatsby" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
