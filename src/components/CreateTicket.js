import React, { Component } from 'react';

export default class CreateTicket extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeDateCreated = this.onChangeDateCreated.bind(this);
        this.onChangeDateClosed = this.onChangeDateClosed.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeTechnicianName = this.onChangeTechnicianName.bind(this);
        this.onChangeTechnicianId = this.onChangeTechnicianId.bind(this);
        this.onChangeTechnicianNotes = this.onChangeTechnicianNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_id: '',
            date_created: '',
            date_closed: '',
            title: '',
            description: '',
            category: '',
            priority: '',
            technician_name: '',
            technician_id: '',
            technician_notes: ''
        };
    };

    onChangeUserId(e) {
        this.setState({
            user_id: e.target.value
        });
    };

    onChangeDateCreated(e) {
        this.setState({
            date_created: e.target.value
        });
    };

    onChangeDateClosed(e) {
        this.setState({
            date_closed: e.target.value
        });
    };

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    };

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    };

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    };

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    };

    onChangeTechnicianName(e) {
        this.setState({
            technician_name: e.target.value
        });
    };

    onChangeTechnicianId(e) {
        this.setState({
            technician_id: e.target.value
        });
    };

    onChangeTechnicianNotes(e) {
        this.setState({
            technician_notes: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            user_id: '',
            date_created: '',
            date_closed: '',
            title: '',
            description: '',
            category: '',
            priority: '',
            technician_name: '',
            technician_id: '',
            technician_notes: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Ticket</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date Created: </label>
                        <input type="date"
                            className="form-control"
                            value={this.state.date_created}
                            onChange={this.onChangeDateCreated}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date Closed: </label>
                        <input type="date"
                            className="form-control"
                            value={this.state.date_closed}
                            onChange={this.onChangeDateClosed}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label><br/>
                        <select name="categoryOptions" id="categoryOptions">
                        <option 
                                name="categoryOptions"
                                id="defaultCategory"
                                value={this.state.category === 'default'}
                                onChange={this.onChangeCategory}>Select a category...</option>
                            <option 
                                name="categoryOptions"
                                id="pchardware"
                                value={this.state.category === 'PC Hardware'}
                                onChange={this.onChangeCategory}>PC Hardware</option>
                            <option 
                                name="categoryOptions"
                                id="software"
                                value={this.state.category === 'Software'}
                                onChange={this.onChangeCategory}>Software</option>
                            <option 
                                name="categoryOptions"
                                id="phoneHardwareRepair"
                                value={this.state.category === 'Phone Hardware/Repair'}
                                onChange={this.onChangeCategory}>Phone Hardware/Repair</option>
                            <option 
                                name="categoryOptions"
                                id="webDev"
                                value={this.state.category === 'Web Development'}
                                onChange={this.onChangeCategory}>Web Development</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='priorityOptions'>Priority:</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangePriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.onChangePriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.onChangePriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Technician Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.technician_name}
                            onChange={this.onChangeTechnicianName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Technician's Notes: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.technician_notes}
                            onChange={this.onChangeTechnicianNotes}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Ticket" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}