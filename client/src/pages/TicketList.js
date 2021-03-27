import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import '../css/TicketList.css'

export default function TicketList(props) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/tickets")
            .then((res) => {
                setTickets(res.data);
                console.log(res.data);
            });
    }, [])

    return (
        <div>
            <h1 className="title">Open Tickets</h1>
            <br/>
            <table className="ticket-list">
                <tr>
                    <th>Date Created</th>
                    <th>Customer</th>
                    <th>Customer Contact</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Technician Name</th>
                </tr>
                {tickets.map((ticket, index) => {
                    return <tr>
                                <td>{ticket.date_created}</td>
                                <td>{ticket.customer}</td>
                                <td>{ticket.customer_contact}</td>
                                <td>{ticket.title}</td>
                                <td>{ticket.description}</td>
                                <td>{ticket.category}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.technician_name}</td>
                            </tr>
                })}
            </table>

            {/* <p>{JSON.stringify(tickets)}</p> */}
        </div>
    );
}