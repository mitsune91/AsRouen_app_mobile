import axios from 'axios';
const API_URL = 'http://localhost:8089/';
/**
 *
 * @param {String} email
 * @param {String} password
 */
async function login(email, password) {
  const user = {email: email.trim().toLowerCase(), password: password};
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8089/login`, user)
      .then(response => {
        if (response && response.status === 200) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}
async function register(firstName, lastName, email, password, address) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email.trim().toLowerCase(),
    password: password,

    addresses: [],
  };
  console.log('yo', user);
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8089/user/create`, user)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error?.response?.data);
      });
  });
}
export const userService = {
  login,
  register,
};
