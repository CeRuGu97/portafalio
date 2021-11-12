import React from 'react';
import './proyects.css';
import proyect1 from '../../img/proyect1.png';
import proyect2 from '../../img/proyect2.png';
import proyect3 from '../../img/protect3.png';
import proyect4 from '../../img/proyect4.png';

export const Proyects = () => {
    return (
        <section className="proyects" id="proyects">
            <h3>Proyectos</h3>
            <div className="main_cards--proyects">
                <div className="card__proyect" data-aos="fade-left">
                    <img src={proyect1} alt="proyecto uno Batabig" />
                    <div className="lenguajes">
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                    <p>
                        Pagina web responsiva de Batabig
                    </p>
                    <div className="card_links">
                        <a href="https://github.com/CeRuGu97/PatataBitResponsiveDesingMobileFist.github.io">
                            <p>Ver repo</p>
                            <span className="githubicon"></span>
                        </a>
                        <a href="https://cerugu97.github.io/PatataBitResponsiveDesingMobileFist.github.io/">
                            <p>Ir al sitio</p>
                            <span className="linkicon"></span>
                        </a>
                    </div>
                </div>

                <div className="card__proyect" data-aos="fade-right">
                    <img src={proyect2} alt="proyecto de batabig" />
                    <div className="lenguajes">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>REACT</p>
                    </div>
                    <p>
                        To Do List
                    </p>
                    <div className="card_links">
                        <a href="https://github.com/CeRuGu97/todoList">
                            <p>Ver repo</p>
                            <span className="githubicon"></span>
                        </a>
                        <a href="https://cerugu97.github.io/todoList/">
                            <p>Ir al sitio</p>
                            <span className="linkicon"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="main_cards--proyects">
                <div className="card__proyect" data-aos="fade-left">
                    <img src={proyect3} alt="proyecto uno Batabig" />
                    <div className="lenguajes">
                        <p>Node JS</p>
                        <p>Express</p>
                        <p>MongoDb</p>
                    </div>
                    <p>
                        Desarrollo de una API REST que se implementó en un Eccommerce, las tecnologías usadas para el proyecto fueron Node.js, Express.js y MongoDb, el desarrollo se trabajo a base de mantener las consultas lo más rápidas posibles y con una base de datos en formato NoSQL
                    </p>
                </div>

                <div className="card__proyect" data-aos="fade-right">
                    <img src={proyect4} alt="proyecto de batabig" />
                    <div className="lenguajes">
                        <p>React Native</p>
                    </div>
                    <p>
                        Registro de entrada con escaneo de QR, consumiendo y enviando datos a una API para el registro y control de las visitas.
                    </p>
                </div>
            </div>
        </section>
    )
}
