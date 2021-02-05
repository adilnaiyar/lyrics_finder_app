import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar.component';
import Index from './components/layout/Index/Index.component';
import { Provider } from './context/context.component';

import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
            <div className="conatiner">
              <Switch>
                <Route exact path='/' component={Index} />
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
