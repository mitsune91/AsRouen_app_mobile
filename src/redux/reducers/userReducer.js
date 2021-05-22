import {
  MODIFY_DEVICE,
  MODIFY_USER,
  SIGN_IN,
  SIGN_OUT,
} from '../actions/actionTypes';

const initState = {
  email: '',
  isLoading: true,
  isConnected: false,
  userToken: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        id: action.item.id,
        userToken: action.item.token,
        isConnected: true,
        email: action.item.email,
        firstName: action.item.firstName,
        lastName: action.item.lastName,
        isLoading: false,
        devices: action.item.devices,
      };
    case SIGN_OUT: {
      return {
        ...state,
        id: '',
        isConnected: false,
        userToken: null,
        email: '',
        firstName: '',
        lastName: '',
        isLoading: false,
        devices: '',
      };
    }
    case MODIFY_USER: {
      return {
        ...state,
        email: action.item.email,
        firstName: action.item.firstName,
        lastName: action.item.lastName,
        userToken: action.item.userToken,
      };
    }
    case MODIFY_DEVICE: {
      return {
        ...state,
        devices: action.item.devices,
      };
    }
    default:
      return state;
  }
};
