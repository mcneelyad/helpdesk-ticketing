import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/EditTicket.css';

export default function EditTicket(props) {
  const { id } = useParams();

  const [ticket, setTicket] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [technicianNotes, setTechnicianNotes] = useState("");
  const [resolution, setResolution] = useState("");

  let options = [];

  useEffect(() => {
    fetch(`http://localhost:5000/ticket/${id}`)
      .then(res => res.json())
      .then((data) => {
        setTicket(data[0]);
        console.log(data[0]);
      });
  }, [id])

  useEffect(() => {
    fetch('http://localhost:5000/technicians')
      .then(res => res.json())
      .then((data) => {
        setTechnicians(data);
      })

  }, []);

  for (let i = 0; i < technicians.length; i++) {
    let techId = technicians[i]._id;
    let techName = technicians[i].first_name + " " + technicians[i].last_name.charAt(0);

    options.push({
      value: techId,
      label: techName
    });

  }

  const handleSelectChange = (e) => {
    // console.log('changed');
    // console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    let id = ticket._id;
    let newTicket = {
      id: ticket._id,
      status: ticket.status,
      title: ticket.title,
      customer: ticket.customer,
      customer_contact: ticket.customer_contact,
      description: ticket.description,
      category: ticket.category,
      priority: ticket.priority,
      technicianId: ticket.technician_id,
      technician_name: ticket.technician_name,
      technician_notes: ticket.technician_notes,

    };

    axios.post(`http://localhost:5000/ticket/${id}`, { id })
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className="editTicket-page">
      <h2 className="title">Edit Ticket #{ticket._id}</h2>
      <div className="editTicket">
        <p><b>Title:</b> {ticket.title}</p><br/>
        <p><b>Submitted By:</b> {ticket.customer} ({ticket.customer_contact})</p><br />
        <p><b>Description:</b> {ticket.description}</p>
        <hr />
        <form className="editTicket-form" onSubmit={handleSubmit}>
          <p><b>Status:</b> {ticket.status}</p>
          <div>Select technician: 
            <select onChange={(e) => handleSelectChange(e)}>
              {technicians.map(tech => {
                return <option key={tech._id}>{tech.first_name} {tech.last_name}</option>
              })}
            </select>
          </div>
          <br />
          <p>Technician Notes</p>
          <textarea
            name="technicianNotes"
            id="technicianNotes"
            cols="30"
            rows="10"
            defaultValue={ticket.technician_notes || ""}
            onChange={(e) => {
              setTechnicianNotes(e.target.value);
              console.log(e.target.value);
            }}>
          </textarea><br /><br />
          <p>Resolution</p>
          <textarea
            name="resolution"
            id="resolution"
            cols="30"
            rows="10"
            value={ticket.resolution || ""}
            onChange={e => {
              setResolution(e.target.value);
              console.log(e.target.value);
            }}>
          </textarea>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}