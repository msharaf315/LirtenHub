import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'

import createAdmin from './adminCruds/CreateAdminForm'
import viewAdmin from './adminCruds/ViewDeleteAdmin'
import ProfileAdmin from './adminCruds/ProfileAdmin'
import AdminLogin from './adminCruds/AdminLogin'

import {Switch,Route} from 'react-router-dom'

import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'
import {privateRoute} from './privateRoute'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route exact path= "/admin/adminLogin" component = {AdminLogin}/>
    <Route exact path= "/admin/createAdmin" component = {createAdmin}/>
    <Route exact path= "/admin/viewAdmin" component = {viewAdmin}/>
    <Route exact path= "/admin/adminProfile" component = {ProfileAdmin}/>
</Switch>
)
export default Main;
