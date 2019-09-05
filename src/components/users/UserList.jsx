import React from 'react';

import Spinner from '../Spinner';
import usersData from '../../data/Users';
import UserCard from './UserCard';
import Services from '../../services/index';

import './users.css';

class UserList extends React.Component {

    state = { users: [],
                sortBy: 'name'
            };
    
    componentDidMount() {
        this.getUsersData();
    }

    getUsersData = () => {
        this.setState({users : usersData.users })
    }

    deleteUser = (userId) => {
        var users = this.state.users
        var useridx;
        users.forEach((user,idx) => {
            if (user.id === userId) useridx = idx;
        })
        users.splice(useridx, 1);
        this.setState({users})
    }
    
    sortUserList = (sortBy) => {
        var users = this.state.users;
        if(sortBy === 'name') users.sort( Services.compareByName );
        if(sortBy === 'city') users.sort( Services.compareByCity );
        if(sortBy === 'status') users.sort( Services.compareByStatus );
        this.setState({users, sortBy})
    }
       
    render() {
        if (this.state.users.length === 0) return  <Spinner />
        if (this.state.users )  {
          return (
            <div >
                <h1 className="title">Online Users</h1>
                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th >USER</th>
                            <th className={(this.state.sortBy === 'name' ? 'sort' : '')} onClick={() => this.sortUserList('name')}>NAME</th>
                            <th className={(this.state.sortBy === 'city' ? 'sort' : '')} onClick={() => this.sortUserList('city')} >CITY</th>
                            <th className={(this.state.sortBy === 'status' ? 'sort' : '')} onClick={() => this.sortUserList('status')}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.state.users.map((user, idx) => {
                    return <UserCard key={idx} user={user} deleteUser={this.deleteUser}/>
                })}
                    </tbody>
                </table>
            </div> 
          );
        }
      }
}

export default UserList;