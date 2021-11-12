import React from 'react'
import './precentation.css';
import photome from '../../img/photome.png';
import doc from '../../docs/CVCesarRubioGuzman.pdf';

export const Precentation = () => {
    return (
        <section className="nameAndPhoto">
            <div className="nameDescription" data-aos="fade-up" data-aos-duration="1000">
                <h1>Cesar</h1>
                <h1>Rubio</h1>
                <h1>Guzmán</h1>
                <h2>Desarrollador Frontend</h2>
                <ul>
                    <li>
                        <a href="https://github.com/CeRuGu97">
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/cesar_rubiog/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cesarrg/">
                            {/* <img src={iconLinkedint} alt="link linkedin" /> */}
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/522381500033?text=Hola%20necesito%20informacíon">
                            {/* <img src={iconwats} alt="link a whatapp" /> */}
                            <i className="fa fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
                <a href={doc} download={doc}>
                    <button>
                        Descargar CV
                    </button>
                </a>
            </div>
            <div className="photo">
                <img src={photome} alt="Cesar Rubio Foto" />
            </div>
        </section>
    )
}
