import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {Provider} from 'react-redux'

//import your component here
import Home from './components/Home'
import Vacancy from './components/vacancyCruds/Vacancy'
import Main from './components/main'
import privateRoute from './components/privateRoute'

//add the rest of the admin cruds here
import CreateAdminForm from './components/adminCruds/CreateAdminForm'

//importing the store
import store from './store.js'
//add other cruds here

//react mdl components
import {Layout,Header,Navigation,Drawer,Textfield,Content } from 'react-mdl';

//bootstrap components 
import 'bootstrap/dist/css/bootstrap.min.css';

//importing authorization function
import setAuthorizationToken from './utils/setAuthorizationToken'

setAuthorizationToken(localStorage.jwtToken);

class App extends Component {
  
  render() {
    return (
      <Provider store ={store}>
      {/*Store holds all the state together*/ }
      <Router>
        <div className="profile-body">
            {/*the new header*/}
            <div className="demo-big-content">
               <Layout>
                 <Header className= 'header-color' title="Lirten Hub" scroll>
                   <Navigation>
                     <Link to="/">Home</Link>
                     </Navigation>
                   </Header>
                <Drawer title="User Name?">
                     <Navigation>
                     <Link to="/userProfile">
                    {/*put an awesome icon here from https://fontawesome.com/icons/id-card?style=solid */}
                     </Link>
                     
                     <Link style={{fontSize: '25px', fontFamily:'Anton' ,color:'black'}} to="/">Home</Link>
                     <h1 style={{fontSize: '25px', fontFamily:'Anton' ,color:'black'}}>Admin</h1>
                     <Link to="/admin/adminLogin">login</Link>
                     <Link to="/admin/createAdmin">create</Link>
                     <Link to="/admin/viewAdmin">view</Link>
                     <Link to ="/admin/adminProfile">View one</Link>
                    </Navigation>
                 </Drawer>
                 <Content>
                 <div className="page-content" />
                 <Main/>
                 </Content>
               </Layout>
             </div>
             <Switch>
               <privateRoute exact path="./components/main" Component = {Main} />
             </Switch>
             
       
         

              

        </div>
     </Router>
      </Provider>
    );
   
  }
}

export default App;
