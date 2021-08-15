import React from 'react';
import Todo from "./assetsfoot/todo.jpg";
class Footerlink2 extends React.Component {
    render() {
        return (
            <div className="work-modelo">
                <div className="work-modelo-img">
                    <img src={Todo} alt="Segon projecto de equipo"/>
                </div>
                <div className="work-modelo-lista">
                    <h3>ListToDo</h3>
                    <a href="https://todolistgroup4.herokuapp.com/index.html">Clic aquí</a>
                </div>
            </div>

        );
    }
}
export default Footerlink2;