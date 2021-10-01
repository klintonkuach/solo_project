import React, { Component, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  HashRouter
} from 'react-router-dom';
import { Table } from './Table.jsx';
import { NewEntry } from './NewEntry.jsx';
import { UpdateEntry } from './UpdateEntry.jsx';


const App = () => {
  return (
    <HashRouter>
      <div className="routers">
        <nav>
          <ul>
            <Link className="newentry" to="/">
              Back to Home
            </Link>
          </ul>
          <ul className="container">
          <span className="titlehead">Running Journal</span>
        </ul>
          <ul>
            <Link className="newentry" to="/newentry">
              New Entry
            </Link>
          </ul>
        </nav>
      </div>

      <div>
        <Switch>
          <Route path="/" component={Table} exact />
          <Route path="/newentry" component={NewEntry} />
          <Route path="/updateentry/:idasdf" component={UpdateEntry} />
          <Route component={Error} />
        </Switch>
      </div>
    </HashRouter>
  );
};


export default App;
