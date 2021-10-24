import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Chart } from "react-google-charts";

import OpenTickets from '../components/OpenTickets';

import '../css/Dashboard.css';

export default function Dashboard() {
    const [statistics, setStatistics] = useState({});
    const [openTickets, setOpenTickets] = useState([]);
    const [technicians, setTechnicians] = useState([]);
    const [ticketsByTech, setTicketsByTech] = useState({});

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

    function createTechnician(evt) {
        evt.preventDefault();
        var person = prompt("Please enter the technician's name", "Harry Potter");

        if (person === null) {
            return;
        }


        var techName = person ? person.split(" ") : [];
        if (techName[1].length === 1) {
            techName[1] = "";
        }
        var technician = {
            first_name: techName[0],
            middle_name: techName[1],
            last_name: techName[2],
        }
        
        axios.post("http://localhost:5000/create-technician", {
            technician: technician
        }).then((res) => {
            console.log(res.data);
        });
    }

    return (
        <div className="dashboard-page">
            <h1 className="title">Dashboard</h1><br />
            <div className="panels">
                <div className="panel-techList">
                    <h3>Technician List</h3><br />
                    <button id="createTechnician" onClick={(e) => createTechnician(e)}>Create a Technician</button>
                    <hr />
                    <ul>
                        {technicians.map((tech) => {
                            return <li key={tech["_id"]}>
                                {tech["first_name"] + " " + tech["last_name"]}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="panel-openTickets">
                    <OpenTickets tickets={openTickets} />
                </div>
                <div className="panel-ticketsByTechnician">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Technician', 'Open Tickets'],
                            ['Alex McNeely', 2],
                            ['Jordan Bolick (McNeely)', 1]
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