import React, { Component } from 'react';
import {Grid,Cell,List, ListItem,ListItemContent} from 'react-mdl';
class ProfileAdmin extends Component {
  render() {
    return (
      <div classname='profile-body'>
       <Grid className='profile-grid'>
          <Cell col={6}>
          <img
          src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png"
          alt="avatar"
          style={
            {height:'250px'}
          }
          />
          <p styl={{width:'75%',margin:'auto',paddingTop:'1em'}}> This is a page displaying my awesome skills in looking up code and implementing
          it. Look at all this beautiful stuff I did not really have to work hard to do.
          You know what they say, Dont reinvent the wheel </p>
          </Cell>
          <Cell col={6}>
          <h2>Muhammad Sharaf</h2>
          <hr/>
          <List className="information-list">
              <ListItem>
                <ListItemContent  style={{fontSize: '35px', fontFamily:'Anton'}}>
                <i class="fas fa-envelope" aria-hidden="true"/>
                muhammadsharaf40dash@gmail.com
                </ListItemContent>
              </ListItem>
              
              
              <ListItem>
                <ListItemContent  style={{fontSize: '35px', fontFamily:'Anton'}}>
                <i class="fas fa-user-astronaut" aria-hidden="true"></i>
                21
                </ListItemContent>
              </ListItem>
              
              
              <ListItem>
                <ListItemContent  style={{fontSize: '35px', fontFamily:'Anton'}}>
                <i class="fas fa-phone" aria-hidden="true"></i>
                01000405666  
                </ListItemContent>
              </ListItem>
           </List>
          
          </Cell>
       </Grid>


      </div>
    )
  }
}


export default  ProfileAdmin