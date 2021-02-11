import React, { Component } from 'react'
import { CardHeader } from '@material-ui/core/';
import './UserCardComponent.css'


export default class UserCardComponent extends Component {
    constructor(props){
        super(props)
       
        }
  render() {
    return (
        <div id="card-profile" >
     



                        <div className="card mb-2" style={{backgroundColor:"#f3f5f2"}} onClick={()=>this.props.modalShow(this.props.details.id)}>
                            <div className="row no-gutters">
                                <div className="col-3 col-m-2 ">
                                    <img className="m-3 rounded-circle" src={this.props.details.img} width="100" height="100" alt="..." data-placement="right" title={"dd"} />
                                </div>
                                <div className="col-9 col-md-8">
                                    <div className="card-body">
                                        <CardHeader
                                         
                                            title={this.props.details.real_name}
                                            subheader={this.props.details.tz}
                                        />
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        </div>






    )
  }
}
