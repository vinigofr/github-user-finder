import { REQUEST_USERS,RECEIVED_USERS } from "../actions";

const INITIAL = {
  users: [],
}

const usersData = (state = INITIAL, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return state;
    case RECEIVED_USERS:
      return {...state, users: action.users };
    default:
      return state;
  }
}

export default usersData;