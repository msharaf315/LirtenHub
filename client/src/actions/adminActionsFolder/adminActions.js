// import your actions type
import {CREATE_ADMIN,VIEW_ADMIN,LOGIN_ADMIN} from './adminTypes';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
const axios = require('axios');
export const createAdmin =  (body)=> async dispatch =>{
    console.log('create action called')
        await axios.post('http://localhost:5000/api/admins/',body)
        .then(res => dispatch({
            type: CREATE_ADMIN,
            payload: res.data.data
        }));
        await axios.get('http://localhost:5000/api/admins/')
    .then(res => 
        dispatch({
        type: VIEW_ADMIN,
        payloadAll: res.data.data
    }));
    
}

export const viewAdmins =  ()=> async dispatch =>{
    
    await axios.get('http://localhost:5000/api/admins/')
    .then(res => 
        dispatch({
        type: VIEW_ADMIN,
        payload: res.data.data
    }));

}

export const signIn =  (body)=> async dispatch =>{
    await axios.post('http://localhost:5000/api/admins/login',body)
    .then(res =>{    
        const token = res.data.token;
        localStorage.setItem('jwtToken',token);
        setAuthorizationToken(token);
    });
}

export const signout =  ()=>  dispatch =>{
localStorage.removeItem('jwtToken');
setAuthorizationToken(false);    
}