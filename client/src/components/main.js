import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'

import createAdmin from './adminCruds/CreateAdminForm'
import viewAdmin from './adminCruds/ViewDeleteAdmin'
import ProfileAdmin from './adminCruds/ProfileAdmin'
import AdminLogin from './adminCruds/AdminLogin'
import AdminLogout from './adminCruds/AdminLogout.js'
import {Switch,Route} from 'react-router-dom'

import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'
import {privateRoute} from '../components/privateRoute'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,

    <Route  path= "/admin/adminLogin" component = {AdminLogin}/>
    <Route  path= "/admin/adminLogout" component = {AdminLogout}/>
    <Route  path= "/admin/createAdmin" component = {createAdmin}/>
    <Route  path= "/admin/viewAdmin" component = {viewAdmin}/>
    <privateRoute   path= "/admin/adminProfile" component = {ProfileAdmin}/>
    
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
 
    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>
    <Route  path= "/search/Rooms" component = {roomFilter}/>
    <Route  path= "/search/Events" component = {eventFilter}/>

    
</Switch>
)
export default Main;
