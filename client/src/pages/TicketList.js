import React, { useState, useEffect } from 'react';
import moment from 'moment';

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
                        <th>Customer Contact</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Technician Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket, index) => {
                        return <tr key={ticket._id}>
                            <td>{ticket.status}</td>
                            <td>{moment(ticket.date_created).format('M-D-YYYY h:mma')}</td>
                            <td>{ticket.title}</td>
                            <td>{ticket.customer}</td>
                            <td>{ticket.customer_contact}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.category}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.technician_name}</td>
                        </tr>
                    })}
                </tbody>
            </table>

            {/* <p>{JSON.stringify(tickets)}</p> */}
        </div>
    );
}