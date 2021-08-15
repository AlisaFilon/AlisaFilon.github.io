import React from 'react';
import AboutMe from "./assetsfoot/aboutme.jpg";
class Footerlink3 extends React.Component {
    render() {
        return (
            <div className="work-modelo">
                <div className="work-modelo-img">
                    <img src={AboutMe} alt="About Me"/>
                </div>
                <div className="work-modelo-lista">
                    <h3>About Me</h3>
                    <a href="https://alisafilon.github.io">Clic aquí</a>
                </div>
            </div>

        );
    }
}
export default Footerlink3;