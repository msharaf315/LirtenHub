import React, { Component } from 'react';
import {connect} from 'react-redux';
//import from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//validation
import PropTypes from 'prop-types'
//importing actions
import {viewAdmins} from '../../actions/adminActionsFolder/adminActions'

class ViewDeleteAdmin extends Component {
  componentWillMount(){
      this.props.viewAdmins();
   }  
  
  
  
  
  render() {
    const admins = this.props.adminRed.map(admin => (
       <div key={admin.id} className='home-grid'>
       <Col>
       <Card className="card text-white bg-dark mb-3" style={{ width: '18rem', paddingTop:'2em'}}>
        <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png" />
        <Card.Body>
        <Card.Title>{admin.firstName}</Card.Title>
         <Card.Text>
          {
          admin.lastName
           }
          </Card.Text>
  </Card.Body>
</Card>
</Col>
       </div>
   ));
   
    return (
      <div>
      {admins}
      </div>
    )
  }
}

//validations
ViewDeleteAdmin.propTypes ={
  viewAdmins: PropTypes.func.isRequired,
  admins:PropTypes.array.isRequired

}

//maping the input to the state
const mapStateToProps = state =>({
  adminRed : state.adminRed.admins
})


export default  connect(mapStateToProps,{viewAdmins})(ViewDeleteAdmin)