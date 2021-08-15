import React from 'react';
import Header from './componentos/header';
import Body from './componentos/body';
import Footer from './componentos/footer';
import Footerend from './componentos/footerend';



class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
                <Footerend />
            </div>
        );
    }
}
export default App;