import React from 'react';
import './footer.css';


export const Footer = () => {
    return (
        <footer id="contact">
            <h3>Contacto</h3>
            <div className="card-footer">
                <p>cesar.pro.rg@gmail.com</p>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/cesar_rubiog/">
                            {/* <img src={iconInsta} alt="link a instagram" /> */}
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cesarrg/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/522381500033?text=Hola%20necesito%20informacíon">
                            <i className="fa fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
