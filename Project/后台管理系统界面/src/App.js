import React from 'react';
import Home from './Home';
import Dengl from './Dengl';
import ManCoat from './man/ManCoat'; 
import ManJacket from './man/ManJacket';
import ManShoes from './man/ManShoes';
import ManTrousers from './man/ManTrousers';

import WomanJacket from './woman/WomanJacket';
import WomanTrouser from './woman/WomanTrouser';
import WomanLoosecoat from './woman/WomanLoosecoat';
import Skirt from './woman/Skirt';
import Dress from './woman/Dress';
import Headwear from './woman/Headwear';
import WomanShoes from './woman/WomanShoes';

// import Foot from './Foot';
import Example from './Example';
import Dynamic from './Dynamic';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {
    return <Router>
      <Example />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dengl' component={Dengl} />
        {/* <Route path='/core' component={Core} />  */}
        <Route path='/man/mancoat' component={ManCoat} /> 
        <Route path='/man/manjacket' component={ManJacket} /> 
        <Route path='/man/manshoes' component={ManShoes} /> 
        <Route path='/man/mantrousers' component={ManTrousers} /> 

        <Route path='/woman/womanjacket' component={WomanJacket} /> 
        <Route path='/woman/womantrouser' component={WomanTrouser} /> 
        <Route path='/woman/womanloosecoat' component={WomanLoosecoat} /> 
        <Route path='/woman/skirt' component={Skirt} /> 
        <Route path='/woman/dress' component={Dress} /> 
        <Route path='/woman/headwear' component={Headwear} /> 
        <Route path='/woman/womanshoes' component={WomanShoes} /> 

        <Route path='/dynamic' component={Dynamic} /> 
      
      </Switch>
    </Router>

  
}

export default App;
