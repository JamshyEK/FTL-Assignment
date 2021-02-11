import {
    ADD_USER,
    USER_ERROR,
    USER_LOADING,
  } from "./UserType";
  
  const UserReducer = (
    state = { loading: true, userErr: null, user: [] },
    action
  ) => {
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          loading: false,
          userErr: null,
          user: action.payload.user,
        };
      case USER_ERROR:
        return {
          ...state,
          loading: false,
          userErr: action.payload.userErr,
          user: [],
        };
      case USER_LOADING:
        return {
           ...state, 
           loading: true, 
           userErr: null, 
           user: [] 
          };
     
      default:
        return state;
    }
  };
  
  export default UserReducer;
  