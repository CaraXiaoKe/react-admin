import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, Link } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox} />
//     </Route>
//   </Router>
// ), document.body)
registerServiceWorker();
