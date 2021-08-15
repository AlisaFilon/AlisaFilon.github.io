import React from 'react';
import Footerlink1 from './componentosfoot/footerlink1';
import Footerlink2 from './componentosfoot/footerlink2';
import Footerlink3 from './componentosfoot/footerlink3';



class Footer extends React.Component {
    render() {
        return (

                <div className="container-work">
                    <div className="container container-work">
                        <div id="Mi trabajo" className="mi-trabajo">Mi primer trabajos con equipo de Factoria F5</div>

                        <div className="work">
            <Footerlink1 />
            <Footerlink2 />
            <Footerlink3 />
            </div>
                    </div>
                </div>
        );
    }
}
export default Footer;