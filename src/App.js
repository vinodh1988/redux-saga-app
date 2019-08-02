import React from 'react';
import './App.css';
import { OfferComponent, Reviews } from './Redux/mappings/mappings';

class App extends React.Component{
    render(){
             return(
                <div>
                        <OfferComponent></OfferComponent>
                        <Reviews></Reviews>
             </div>
            )
    }
}

export default App;
