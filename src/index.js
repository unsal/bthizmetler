import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";
import './index.css';
import App from './App';
import Hizmetler from './menu/Hizmetler';
import Projeler from './menu/Projeler';
import ProjelerAsCard from './menu/ProjelerAsCard';
import ProjelerAsList from './menu/ProjelerAsList';
import Ekibimiz from './menu/Ekibimiz';
import SSS from './menu/SSS';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/hizmetler' component={Hizmetler} />
        <Route exact path='/projeler' component={Projeler} />
        <Route exact path='/projeler/card' component={ProjelerAsCard} />
        <Route exact path='/projeler/list' component={ProjelerAsList} />
        <Route exact path='/ekibimiz' component={Ekibimiz} />
        <Route exact path='/sss' component={SSS} />
    </Switch>
</Router>
, document.getElementById('root'));

// registerServiceWorker();
