import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import './App.css';

import CreateTicket from './pages/CreateTicket';
import TicketList from "./pages/TicketList";
import Login from "./pages/Login";

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Route path="/tickets">
          <TicketList />
        </Route>
        <Route path="/submit">
          <CreateTicket />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
