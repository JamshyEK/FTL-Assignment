import React, { Component } from 'react'
import Navbar from './Navbar/NavbarComponent'
import Header from './Header/HeaderComponent'
import Content from './Content/ContentComponent'
//import { connect } from "react-redux";
//import {addUser,addUse} from '../redux/Users/UserAction'




// const mapStateToProps = (state) => {
//     return {
//     user:state.user
//     };
//   };

//   const mapDispatchToProps = (dispatch) => ({
//       addUser:()=>{
//         dispatch(addUser())
//       }
//   })


class Main extends Component {

    // componentDidMount(){
    //     addUse()
    //     addUser()

    //   }
    render() {
        return (
            <div>
            <Navbar/>
            <Header/>
            <Content/>
                
            </div>
        )
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main;