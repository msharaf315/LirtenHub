// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {signout} from '../../actions/adminActionsFolder/adminActions';
import auth from "../auth"
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



 class AdminLogout extends Component {
  //contructor with the attribute of the crud you want
  constructor(props){
    super(props)
    this.state = { 
    };
    //bind the methods with the entity
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  _onButtonClick() {

    this.setState({
      redirect: true
    });
  }
   //what happens when you click the submit button
   async onSubmit(e){
   this.props.signout()
   this._onButtonClick()
   auth.logout()
  }
  
    render() {
      const { redirect } = this.state;
      if (redirect) {
        return (<Redirect to='/' />)
      
      }
    return (
        <div className='home-grid' >
        <Form onSubmit={this.onSubmit}>
     
       <button type="submit" className="custom-btn">Logout</button>
   </Form>
         </div>
       
    )
  }
}
//defining the propTypes
AdminLogout.propTypes ={
    signout: PropTypes.func.isRequired
  };
 
  
  
  //exports the component to god knows where
  export default connect(null,{signout})(AdminLogout);
  