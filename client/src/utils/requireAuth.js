import React, { Component } from 'react'
import {connect} from 'react-redux'
export default function(ComposedComponent){
    class Authenticate extends React.Component {
        render() {
          return (
           <ComposedComponent {...this.props} />   
           
          );
        }
      }

      function mapStateToProps(state){

        return{
            adminRed: state.adminRed.isAuthenticated
        }
      }
      return (mapStateToProps)(Authenticate)
}
 
