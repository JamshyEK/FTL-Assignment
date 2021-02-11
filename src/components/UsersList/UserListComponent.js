import React, { Component } from "react";
import UserCard from "./UserCardComponent";
import "./UserListComponent.css";
import {  Divider } from "@material-ui/core/";
import {  Modal,Table } from "react-bootstrap";
import userdata from "../../shared/Usersdata.json";

export default class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      users: userdata.members,
      modalUser: [],
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: true,
      modalUser: this.state.users.filter((x) => x.id === id),
    });
  };

  render() {
    console.log(this.state.modalUser);
    return (
      <div>
        {/* <p>{this.state.users[0].real_name}</p> */}
        {this.state.users.map((x) => {
          return (
            <div>
              <UserCard key={x.id} details={x} modalShow={this.handleShow} />
            </div>
          );
        })}

        {/* <Button variant="primary" onClick={this.handleShow}>
        Launch static backdrop modal
      </Button> */}
        {this.state.modalUser[0] ? (
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <div className="row">
                <div className="col-4">
                  <img
                    className="m-3 rounded-circle"
                    src={this.state.modalUser[0].img}
                    width="80"
                    height="80"
                    alt="..."
                    data-placement="right"
                  />
                </div>
                <div className="col-8">
                  <h5
                    class="modal-title ml-2 font-weight-bold"
                    id="exampleModalLabel"
                  >
                    {this.state.modalUser[0].real_name}
                  </h5>
                 
                  <small className="m-2 font-italic text-muted">
                    {this.state.modalUser[0].tz}
                  </small>
                </div>
              </div>

              {/* <Modal.Title>{ this.state.modalUser[0].id }</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            <div>
              <h5 style={{textAlign:"center"}}>  Activity Periods
 </h5>
            </div>
            <hr/>

            <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Start time</th>
      <th>End time</th>
    </tr>
  </thead>
  <tbody>
              {this.state.modalUser[0].activity_periods
                ? this.state.modalUser[0].activity_periods.map((x) => {
                    return (
                      <tr>
      <td>{x.start_time} </td>
      <td>{x.end_time}</td>
    </tr>
                  
                    );
  
                  })
                : null}
                </tbody>
</Table>
            </Modal.Body>
         
          </Modal>
        ) : null}
      </div>
    );
  }
}
