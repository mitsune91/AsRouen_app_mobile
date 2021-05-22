import React, {useEffect} from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {modifyUser, signIn} from '../redux/actions/userAction';
import {userService} from '../utils/services/UserService';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function RootNavigator() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const findToken = async () => {
    return AsyncStorage.getItem('authToken');
  };
  useEffect(() => {
    async function fetchData() {
      findToken().then(res => {
        if (res) {
          axios.defaults.headers.common['authorization'] = res;
          let token = res.replace('Bearer ', '');
          const tokenDecode = jwt_decode(token);
          if (tokenDecode.userId) {
            userService.findUser(tokenDecode.userId).then(response => {
              console.log('object', response);
              dispatch(
                signIn({
                  id: response.userId,
                  token: token,
                  email: response.email,
                  firstName: response.firstName,
                  lastName: response.lastName,
                }),
              );
            });
          }
        }
      });
    }
    fetchData();
  }, []);

  if (!user.userToken) {
    return <AuthNavigator></AuthNavigator>;
  } else {
    return <HomeNavigator></HomeNavigator>;
  }
}
