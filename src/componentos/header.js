import React from 'react';
import In from "./assets/logoin.png";
import Gmail from "./assets/logomail.png";
import Github from "./assets/logogit.png";


class Header extends React.Component {
    render() {
        return (

            <div className="header">
                <div className="blog">
                    <a className="blog-link" href="#Quién soy">Sobre mí</a>
                    <a className="blog-link" href="#Mi trabajo">Mi trabajo</a>
                </div>
                <div className="logos">
                    <div className="hola">
                        <h1>Hi there!</h1>
                        <div className="slogan">I'm Alisa,
                            a Full-Stack Developer
                        </div>

                    </div>
                    <div className="logo">
                        <a href="https://www.linkedin.com/in/alisa-filonenko-a5045419b/">
                            <img src={In} className="logo-link " alt="" /></a>
                        <a href="mailto:filonenkoalisa@gmail.com">
                            <img src={Gmail} className="logo-link" alt="" /></a>
                        <a href="https://github.com/AlisaFilon">
                            <img src={Github} className="logo-link" alt="" /></a>
                    </div>
                </div>
            </div>

        );
    }
}
export default Header;