import React, { Component } from 'react'
import { Redirect } from 'react-router-dom' 
var whatToRender;
export default function(ComposedComponent){
    class Authenticate extends Component {
        render() {
            return (
                localStorage.getItem('jwtToken')? <ComposedComponent{...this.props}/>:<Redirect to='/admin/adminLogin'/>
            )
        }
    }
return Authenticate;
}
