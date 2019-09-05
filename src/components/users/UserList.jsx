import React from 'react';

import Spinner from '../Spinner';
import usersData from '../../data/Users';
import UserCard from './UserCard';

import './users.css';

class UserList extends React.Component {

    state = { users: [] };
    
    componentDidMount() {
        this.getUsersData();
    }

    getUsersData = () => {
        this.setState({users : usersData.users });
    }
    deleteUser = (userId) => {
        var users = this.state.users
        let userIdx = users.indexOf(userId);
        users.splice(userIdx, 1);
        this.setState({users})
    }

    sortUserList = () => {
        var users = this.state.users;
        users.sort( compare );

        function compare ( a, b ) {
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
          }  
          this.setState({users})
    }

       

    render() {
        if (this.state.users.length === 0) return  <Spinner />
        if (this.state.users )  {
          return (
            <div >
                <div className="user-container">
                    <div >USER</div>
                    <div onClick={this.sortUserList}>NAME</div>
                    <div onClick={this.sortUserList}>CITY</div>
                    <div onClick={this.sortUserList}>STATUS</div>
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