import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import { Avatar, CardHeader, Divider } from '@material-ui/core/';


export default class UserCardComponent extends Component {
    constructor(props){
        super(props)
       
        }
  render() {
    return (
        <div >
     



                        <div className="card mb-2" style={{backgroundColor:"#f3f5f2"}} onClick={()=>this.props.modalShow(this.props.details.id)}>
                            <div className="row no-gutters">
                                <div className="col-m-2 ">
                                    <img className="m-3 rounded-circle" src={this.props.details.img} width="100" height="100" alt="..." data-placement="right" title={"dd"} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <CardHeader
                                            // avatar={
                                            //     <Avatar aria-label="recipe" className="bg-danger mr-2" data-placement="right" title={"kjhk"}>{"bb"}</Avatar>
                                            // }
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
