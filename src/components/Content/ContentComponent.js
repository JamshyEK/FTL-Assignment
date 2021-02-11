import React, { Component } from 'react'
import './ContentComponent.css'
import {Nav} from 'react-bootstrap'
import UserList from '../UsersList/UserListComponent'
 
export default class ContentComponent extends Component {
  render() {
    return (
      <>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2" style={{backgroundColor:'rgb(230 236 226 / 72%'}}>
            <div className="container" id="sidebar-wrapper" >

            <Nav className="col-md-12 d-none d-md-block sidebar"
            
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item id="test">
                <Nav.Link id="nav-a-active" > <i class="fa fa-user" aria-hidden="true"> </i> All users
 </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="nav-a" ><i class="fa fa-star" aria-hidden="true"> </i> Featured Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="nav-a" ><i class="fa fa-minus-circle" aria-hidden="true"> </i> Rejected Users</Nav.Link>
            </Nav.Item>
           
            </Nav>
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{backgroundColor:'rgb(230 236 226 / 72%'}}>
            <div className="container" style={{paddingTop:'8px'}}>
            <UserList/>

            </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4" style={{backgroundColor:'rgb(230 236 226 / 72%'}}>
            <div className="container" style={{paddingTop:'8px'}}>
            

            <h6 style={{fontWeight: 700}}
    
>Most viewed profiles</h6>
<hr/>
<div class="row">
  <div class="col-3"><img src="assets/images/steve.jpg" class="img-thumbnail" alt="img"/></div>
  <div class="col-9">
    <p style={{fontWeight: "500",
    color: "#14212a"}}
    >Steve Jobs</p>
    <p>Steven Paul Jobs (/dʒɒbz/; February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, investor, and media proprietor. <a href="#">Read more</a></p>
  </div>
  <div class="col-3"><img src="assets/images/mark.jpg" class="img-thumbnail" alt="img"/></div>
  <div class="col-9">
    <p style={{fontWeight: "500",
    color: "#14212a"}}>Mark Zuckerberg</p>
    <p>Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook<a href="#">Read more</a></p>
  </div>
  <div class="col-3"><img src="assets/images/bill.jpg" class="img-thumbnail" alt="img"/></div>
  <div class="col-9"> <p style={{fontWeight: "500",
    color: "#14212a"}}>Bill Gates</p>
    <p>William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, and philanthropist. He is a co-founder of Microsoft Corporation <a href="#">Read more</a></p>
    </div>

</div>




            </div>
            </div>
        </div>
      </>
    )
  }
}
