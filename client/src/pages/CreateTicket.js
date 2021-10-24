import React, { useState } from 'react';
import axios from 'axios';

import '../css/CreateTicket.css';

export default function CreateTicket(props) {
  const [title, setTitle] = useState('');
  const [customer, setCustomer] = useState('');
  const [customer_contact, setCustomerContact] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const ticket = {
      title: title,
      customer: customer,
      customer_contact: customer_contact,
      description: description,
      category: category,
      priority: priority
    };

    axios.post("http://localhost:5000/create", { ticket })
      .then(res => {
        console.log(res);
      })
    window.location.href = "/tickets";
  }

  return (
    <div className="createTicket-page">
      <h1 className="title">Submit a Ticket</h1>
      <form onSubmit={handleSubmit} className="ticket-form">

        <div id="ticket_info">
          <label className="form-label">Briefly describe your issue</label><br />
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-input" />

          <br /><br />

          <label className="form-label">Provide details</label><br />
          <textarea cols="40" rows="10" value={description} onChange={e => setDescription(e.target.value)} className="form-input" />
        </div>

        <br />

        <div id="customer_info">
          <div id="customer_name">
            <label className="form-label">Customer Name </label><br />
            <input type="text" value={customer} onChange={e => setCustomer(e.target.value)} className="form-input" />
          </div>

          <br /><br />

          <div id="customer_contact">
            <label className="form-label">Customer Contact </label><br />
            <input
              type="text"
              placeholder="Enter your email address, phone number, etc..."
              value={customer_contact}
              onChange={e => setCustomerContact(e.target.value)}
              className="form-input" />
          </div>

        </div>

        <br />
        <hr />
        <br />

        {/* <label className="form-label">Category</label><br />
        <select className="form-input" onChange={e => setCategory(e.target.value)}>
          <option value="">Select a category...</option>
          <option value="Phones">Phones</option>
          <option value="Printers and Copiers">Printers and Copiers</option>
          <option value="Networking">Networking</option>
          <option value="Email Issues">Email Issues</option>
          <option value="Desktop Hardware">Desktop Hardware</option>
          <option value="Desktop Software">Desktop Software</option>
          <option value="Web Development/Design">Web Development/Design</option>
          <option value="Website">Website</option>
        </select>

        <br /><br />

        <label className="form-label">Priority</label><br />
        <div className="priority-input form-input" onChange={e => setPriority(e.target.value)}>
          <input type="radio" value="Low" name="category-label" className="category-label" /> Low<br />
          <input type="radio" value="Medium" name="category-label" className="category-label" /> Medium<br />
          <input type="radio" value="High" name="category-label" className="category-label" /> High<br />
          <input type="radio" value="Urgent" name="category-label" className="category-label" /> Urgent<br />
        </div>

        <br /><br /> */}

        {/* <label className="form-label">Technician</label><br />
        <select className="form-input" onChange={e => setTechnicianName(e.target.value)}>
          <option value="">Select a technician...</option>
          <option value="Alex D McNeely">Alex D McNeely</option>
        </select>

        <br /><br />

        <label className="form-label">Technician Notes</label><br />
        <textarea cols="40" rows="10" value={technicianNotes} onChange={e => setTechnicianNotes(e.target.value)} className="form-input" />

        <br /><br /> */}

        <input type="button" value="Submit" onClick={handleSubmit} className="form-submit" />
      </form>
    </div>
  );
}