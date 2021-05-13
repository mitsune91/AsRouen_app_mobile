import {MODIFY_DEVICE, MODIFY_USER, SIGN_IN, SIGN_OUT} from './actionTypes';

export function signIn(data) {
  return dispatch({
    type: SIGN_IN,
    item: data,
  });
}

export function signOut() {
  return dispatch({
    type: SIGN_OUT,
  });
}

export function modifyUser(data) {
  return {
    type: MODIFY_USER,
    item: data,
  };
}

export function modifyDevices(data) {
  return {
    type: MODIFY_DEVICE,
    item: data,
  };
}
