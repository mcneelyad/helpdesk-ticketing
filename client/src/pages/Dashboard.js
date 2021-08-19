import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Chart } from "react-google-charts";

import '../css/Dashboard.css';

export default function Dashboard() {
    const [statistics, setStatistics] = useState({});
    const [openTickets, setOpenTickets] = useState([]);
    const [technicians, setTechnicians] = useState([]);
    const [ticketsByTech, setTicketsByTech] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/dashboard")
            .then((res) => {
                console.log(res.data);

                setStatistics(res.data);
                setOpenTickets(res.data.openTickets);
                setTechnicians(res.data.technicians);
                setTicketsByTech(res.data.ticketsByTech);
            });
    }, [])

    const showModal = e => {
        setIsModalOpen(true);
    }

    return (
        <div className="dashboard-page">
            <h1 className="title">Dashboard</h1><br />
            <div className="panels">
                <div className="panel-techList">
                    <h3>Technician List</h3><br />
                    <button onClick={(e) => this.showModal()}>Create a Technician</button>
                    <hr />
                    <ul>
                        {technicians.map((tech) => {
                            return <li key={tech["_id"]}>
                                {tech["first_name"] + " " + tech["middle_name"].charAt(0) + " " + tech["last_name"]}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="panel-openTickets">
                    <div>
                        <h2>{openTickets.length}</h2>
                        <h4>Open Tickets</h4>
                    </div>
                </div>
                <div className="panel-ticketsByTechnician">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Technician', 'Open Tickets'],
                            ['Alex D McNeely', 2],
                            ['Jordan D Bolick (McNeely)', 1]
                        ]}
                        options={{
                            title: 'Tickets By Technician',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
                <div className="panel-tickets">
                    <h3 style={{ textAlign: `center`, padding: `0.5rem` }}>Your Assigned Tickets</h3>
                    <table id="open_ticket_list">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Date Created</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {openTickets.map((ticket) => {
                                return <tr key={ticket["_id"]}>
                                    <td>{ticket["status"]}</td>
                                    <td>{moment(ticket["date_created"]).format('MM-D-YYYY h:mma')}</td>
                                    <td>{ticket["title"]}</td>
                                    <td>{ticket["category"]}</td>
                                    <td className={ticket["priority"]}>{ticket["priority"]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};