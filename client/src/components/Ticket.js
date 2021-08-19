import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons';

function Ticket({ticket, onEditClick, onDeleteClick}) {
    return (
        <tr key={ticket._id}>
            <td>{ticket.status}</td>
            <td>{moment(ticket.date_created).format('M-D-YYYY h:mma')}</td>
            <td>{ticket.title}</td>
            <td>{ticket.customer}</td>
            <td className="text-truncate" onMouseOver={() => console.log(ticket.description)}>{ticket.description}</td>
            <td>{ticket.category}</td>
            <td className={ticket.priority}>{ticket.priority}</td>
            <td className="edit_delete_buttons">
                <Link to={"/edit/"+ticket._id }><button onClick={() => onEditClick(ticket)}><FontAwesomeIcon icon={faPen} /></button></Link>
                <button onClick={e => onDeleteClick(ticket)}><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>
    )
}

export default Ticket
