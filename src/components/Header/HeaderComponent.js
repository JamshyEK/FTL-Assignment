import React, { Component } from 'react'
import './HeaderComponent.css'

export default class HeaderComponent extends Component {
  render() {
    return (
   <div className="row" id="head-row">
<div className="col-md-2 col-lg-2">
<div className="container">
    <h5><i className="fa fa-users" aria-hidden="true"></i> Users</h5>
    </div>
</div>
<div className="col-md-10 col-lg-10">
<div className="container">
<div className="row">
<div className="col-12 col-sm-12 col-md-4"></div>
<div className="col-12 col-sm-12 col-md-4"></div>
<div className="col-12 col-sm-12 col-md-4">
<div className="col-auto">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text" id="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search for users..."/>
      </div>
    </div>
</div>
</div>
    </div></div>
   </div>
    )
  }
}
