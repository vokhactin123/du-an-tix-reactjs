const initialState = {
  infoUser: null,
  messError: null,
  infoUserBooking: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_LOGIN_SUCCESS": {
      return { ...state, infoUser: action.payload };
    }
    case "SAVE_USER_LOGOUT": {
      return { ...state, infoUser: action.payload };
    }
    case "RESET_ERR_MESS": {
      return { ...state, messError: action.payload };
    }
    case "FETCH_INFO_USER_BOOKING_SUCCESS": {
      console.log(action.payload);
      return { ...state, infoUserBooking: action.payload };
    }
    default:
      return { ...state };
  }
};
export default UserReducer;
