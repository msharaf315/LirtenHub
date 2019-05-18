import axios from 'axios'
export default function setAuthorizationToken (token){
    if(token){
    console.log('token')
        axios.defaults.headers.common['Authorization'] =  `${token}`;
    } else {
        console.log('no token')
        delete axios.defaults.headers.common['Authorization'];
    }
}