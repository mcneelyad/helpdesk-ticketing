import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Ticket from '../components/Ticket';

import '../css/TicketList.css';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/tickets")
            .then((res) => {
                setTickets(res.data);
            });
    }, [])

    const onEditClick = (ticket) => {
        <Link to={"/edit/"+ticket._id }/>
    }

    const onDeleteClick = (ticket) => {
        alert("Not implemented yet");
    }

    return (
        <div className="ticketList-page">
            <h1 className="title">Open Tickets</h1>
            <br />
            <table className="ticket-list">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>Title</th>
                        <th>Customer</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket, index) => {
                        return <Ticket ticket={ticket} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
                    })}
                </tbody>
            </table>
        </div>
    );
}