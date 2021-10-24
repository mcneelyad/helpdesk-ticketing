import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/EditTicket.css';

export default function EditTicket(props) {
  const { id } = useParams();

  const [ticket, setTicket] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [customer, setCustomer] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [technicians, setTechnicians] = useState([]);
  const [technicianNotes, setTechnicianNotes] = useState("");
  const [resolution, setResolution] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [priorityList, setPriorityList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/ticket/${id}`)
      .then(res => res.json())
      .then((data) => {
        setTicket(data[0]);
        setTitle(data[0].title);
        setDescription(data[0].description);
        setPriority(data[0].priority);
        setStatus(data[0].status);
        setCategory(data[0].category);
        setCustomer(data[0].customer);
        setCustomerContact(data[0].customer_contact);

        setTechnicianNotes(data[0].technician_notes);
        setResolution(data[0].resolution);

        console.log(data[0]);
      });
  }, [id])

  useEffect(() => {
    fetch('http://localhost:5000/technicians')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setTechnicians(data);
      });

    axios.get('http://localhost:5000/get-categories').then(res => {
      setCategoryList(res.data);
    });

    axios.get('http://localhost:5000/get-priorities').then(res => {
      setPriorityList(res.data);
    });
  }, []);

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
      <div className="row">
        <div className="column left">
          <label className="form-label">Title</label><br />
          <input type="text" value={title} className="form-input" disabled/>

          <label className="form-label">Description</label><br />
          <textarea value={description} className="form-input" disabled/>

          <label className="form-label">Technician</label><br />
          <select name="technician" id="technician" className="form-input">
            {technicians.map(technician => {
              return (
                <option key={technician._id} value={technician._id}>{technician.first_name + " " + technician.last_name}</option>
              )
            })}
          </select>

          <label className="form-label">Technician Notes</label><br />
          <textarea value={technicianNotes} rows="10" className="form-input" />
        </div>
        <div className="column right">
          <label className="form-label">Status</label><br />
          <select name="ticket-status" id="ticket-status" className="form-input">
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          <label className="form-label">Priority</label><br />
          <select name="ticket-priority" id="ticket-priority" className="form-input">
            {!priority && <option value="" selected disabled>Select a priority</option>}
            {priorityList.map((priority, i) => {
              return <option key={i} value={priority.label}>{priority.label}</option>
            })}
          </select>

          <label className="form-label">Category</label><br />
          <select name="ticket-category" id="ticket-category" className="form-input">
            {!category && <option value="">Select a category</option>}
            {categoryList.map((category, i) => {
              return <option key={i} value={category.label}>{category.label}</option>
            })}
          </select>

          <hr />

          <label className="form-label">Customer Name</label><br />
          <input type="text" value={customer} className="form-input" />

          <label className="form-label">Customer Contact</label><br />
          <input type="text" value={customerContact} className="form-input" />
        </div>
      </div>
    </div>
  );
}