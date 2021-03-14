import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar.component";
import Index from "./components/layout/Index/Index.component";
import Lyrics from "./components/content/Lyrics/Lyrics.component";
import { ContextController } from "./context/context.component";

function App() {
  return (
    <ContextController>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="conatiner">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  );
}

export default App;
