import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
// <HashRouter>
//     <Switch>
//         <Route exact path='/' component={App} />
//     </Switch>
// </HashRouter>

// );


registerServiceWorker();
