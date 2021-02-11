import * as ActionTypes from "./UserType";
//import USER from '../../shared/users'
import userdata from  '../../shared/Usersdata.json'

// export const addUser = () => ({
//     type: ActionTypes.ADD_USER,
//     payload: {
//       user: userdata.members,
//     },
//   });
  


  export const addUser=()=>{
    return{
        type:ActionTypes.ADD_USER,
        payload: {
            user: userdata.members,
          }
    }
}

  export const addUse=()=>{
      console.log(userdata.members)
  }