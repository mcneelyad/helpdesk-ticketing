import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TicketList from './components/TicketList';
import EditTicket from './components/EditTicket';
import CreateTicket from './components/CreateTicket';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/" className="navbar-brand">Helpdesk</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Tickets</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create a Ticket</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TicketList} />
          <Route path="/edit/:id" component={EditTicket} />
          <Route path="/create" component={CreateTicket} />
        </div>
      </Router>
    );
  }
}

export default App;