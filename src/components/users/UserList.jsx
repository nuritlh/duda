import React from 'react';

import Spinner from '../Spinner';
import usersData from '../../data/Users';
import UserCard from './UserCard';
import Services from '../../services/index';

import './users.css';

class UserList extends React.Component {

    state = { users: [] };
    
    componentDidMount() {
        this.getUsersData();
    }

    getUsersData = () => {
        this.setState({users : usersData.users })
    }

    deleteUser = (userId) => {
        var users = this.state.users
        let userIdx = users.indexOf(userId);
        users.splice(userIdx, 1);
        this.setState({users})
    }


    
    sortUserList = (sortBy) => {
        var users = this.state.users;
        if(sortBy === 'name') users.sort( Services.compareByName );
        if(sortBy === 'city') users.sort( Services.compareByCity );
        if(sortBy === 'status') users.sort( Services.compareByStatus );
        this.setState({users})
         
    }
       

    render() {
        if (this.state.users.length === 0) return  <Spinner />
        if (this.state.users )  {
          return (
            <div >
                <div className="user-container">
                    <div >USER</div>
                    <div onClick={() => this.sortUserList('name')}>NAME</div>
                    <div onClick={() => this.sortUserList('city')}>CITY</div>
                    <div onClick={() => this.sortUserList('status')}>STATUS</div>
                    <div></div>
                </div>
                {this.state.users.map((user, idx) => {
                    return <UserCard key={idx} user={user} deleteUser={this.deleteUser}/>
                })}
            </div> 
          );
        }
      }
}

export default UserList;