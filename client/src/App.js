import React, { useState } from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import './App.css';

import CreateTicket from './pages/CreateTicket';
import TicketList from "./pages/TicketList";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2">
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
        <Route exact path="/">
          <TicketList/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
