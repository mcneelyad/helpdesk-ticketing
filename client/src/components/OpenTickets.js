import React from 'react';

export default function OpenTickets({ tickets }) {
    return (
        <div>
            <h2>{tickets.length}</h2>
            <h4>Open Tickets</h4>
        </div>
    )
}