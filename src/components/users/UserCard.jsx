import React from 'react';

import './users.css';


class UserCard extends React.Component {

    state = {active: (this.props.user.active)? 'Active' : 'Non Active',
            userImg: '../../../public/images/user' + this.props.user.id + '.png'
    }

    deleteUser = () => {
        this.props.deleteUser(this.props.user.id);
    }

    render () {
        return (
            <div className="user-container">
                <div>
                    <img src={this.state.userImg}/>
                </div>
                <div>
                    {this.props.user.city}
                </div>
                <div>
                    {this.props.user.name}
                </div>
                <div>
                    {this.state.active}
                </div>
                <div>
                    <button className="ui button" onClick={this.deleteUser}>delete</button>
                </div>
            </div>
        )
    }
}

export default UserCard