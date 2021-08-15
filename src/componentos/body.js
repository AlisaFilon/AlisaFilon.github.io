import React from 'react';
import Foto from "./assets/Ali.jpg";

class Body extends React.Component {
    render() {
        return (
            <div className="container container-blog">
                <div className="blog-photo">
                    <img className="blog-photo-img" src={Foto} alt=""/>
                </div>
                <div className="blog-content">
                    <h3 id="Quién soy" className="blog-title">Quién soy</h3>
                    <p>Tengo un graduado de diploma en el área de Redes de Telecomunicación.
                        Y solo ahora tuve una oportunidad única de complementar mi educación con el estudio del
                        Desarrollo Web,
                        esta es la otra cara de una moneda, en la que mis habilidades se pueden mejorar y complementar
                        en el campo de la programación.</p>
                    <h3 className="blog-title">Estoy participando en el Bootcamp Desarrollo web – Full - stack FACTORIA
                        F5.</h3>
                    <p>Estoy aprendiendo nuevas herramientas y lenguajes como HTML, CSS, JavaScript, Java, Mongo DB
                        que me permiten desarrollar proyectos altamente funcionales.</p>
                    <h3 className="blog-title">Tengo muchas ganas de empezar a trabajar</h3>
                    <p>Tengo muchas ganas de empezar a trabajar donde pueda seguir estudiando
                        y adquiriendo habilidades como buen especialista.</p>
                </div>
            </div>

        );
    }
}
export default Body;