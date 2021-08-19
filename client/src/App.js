import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import CreateTicket from './pages/CreateTicket';
import TicketList from "./pages/TicketList";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import EditTicket from './pages/EditTicket';

function App() {

  return (
    <Router>
      <div className="container mt-2">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <TicketList />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/tickets">
            <TicketList />
          </Route>
          <Route path="/submit">
            <CreateTicket />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/edit/:id">
            <EditTicket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
