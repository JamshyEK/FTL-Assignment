import React, { Component } from "react";
import UserCard from "./UserCardComponent";
import "./UserListComponent.css";
import { Avatar, CardHeader, Divider } from "@material-ui/core/";
import { Button, Modal } from "react-bootstrap";
import userdata from "../../shared/Usersdata.json";

export default class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      users: userdata.members,
      modalUser: []
    };
  }

  handleClose = () => {
    this.setState({
      show: false
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
             <img className="m-3 rounded-circle" src={this.state.modalUser[0].img} width="80" height="80" alt="..." data-placement="right"  />
                                    <h5 class="modal-title ml-2 font-weight-bold" id="exampleModalLabel">{this.state.modalUser[0].real_name} <br/></h5>
                                   
                                    <small className="m-2 font-italic text-muted">{this.state.modalUser[0].tz}</small>
                                   
              {/* <Modal.Title>{ this.state.modalUser[0].id }</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
            {this.state.modalUser[0].activity_periods ?
                                        this.state.modalUser[0].activity_periods.map(x => {
                                            return (
                                                <div>
                                                    <p>Start time / End time : {x.start_time} /  {x.end_time}</p><Divider /> 
                                                </div>
                                            )
                                        })
                                        : null}
             
            </Modal.Body>
            {/* <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
          </Modal>
        ):null}
      </div>
    );
  }
}
