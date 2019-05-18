// importing react and connect
import React, { Component } from 'react';
//open a connection with the store
import {connect} from 'react-redux';
//import prop types which validates the inputs to this components
import PropTypes from 'prop-types';
//import actions on this component
import {signIn} from '../../actions/adminActionsFolder/adminActions';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



 class AdminLogin extends Component {
  //contructor with the attribute of the crud you want
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',  
    };
    //bind the methods with the entity
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //on change set the state with the target value from any event(e)
   onChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   //what happens when you click the submit button
   async onSubmit(e){
   //prevents submitting empty values
    e.preventDefault();
   //the body you will send
    const body={
      email:this.state.email,
      password:this.state.password,
   }
   //send an axios request
   this.props.signIn(body)



   //reset the inputs to empty 
   this.setState({
    email:'',
    password:'' 
             })
  }
  
    render() {
    return (
        <div className='home-grid' >
        <Form onSubmit={this.onSubmit}>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" onChange ={this.onChange} name="email" placeholder="Enter email"  value={this.state.email} />
       </Form.Group>
   
       <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" onChange ={this.onChange} name="password"   value={this.state.password}/>
       </Form.Group>
     </Form.Row>
     
       <button type="submit" className="custom-btn">login</button>
   </Form>;
         </div>
       
    )
  }
}
//defining the propTypes
AdminLogin.propTypes ={
    signIn: PropTypes.func.isRequired
  };
 
  
  
  //exports the component to god knows where
  export default connect(null,{signIn})(AdminLogin);
  