import React from 'react';
import SCO from "./assetsfoot/SCO.jpg";

class Footerlink1 extends React.Component {
    render() {
        return (
            <div className="work-modelo">
                <div className="work-modelo-img">
                    <img src={SCO} alt="Primer projecto de equipo"/>
                </div>
                <div className="work-modelo-lista">
                    <h3>SilaCodersOne</h3>
                    <a href="https://marvienicole.github.io/SilaCodersOne/index.html">Clic aquí</a>
                </div>
            </div>

        );
    }
}
export default Footerlink1;