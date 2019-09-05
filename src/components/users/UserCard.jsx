import React from 'react';

import './users.css';

class UserCard extends React.Component {

    state = {active: (this.props.user.active)? 'Active' : 'Non Active',
            userImg: this.props.user.id + 1
    }

    deleteUser = () => {
        this.props.deleteUser(this.props.user.id);
    }

    render () {
        return (


            <tr>
                <td>
                    <h4 className="ui image header">
                        <img src={this.props.user.src} alt="user poster" className="ui mini rounded image" />
                    </h4>
                </td>
                <td>
                    <div className="content name">
                        {this.props.user.name}
                    </div>
                </td>
                <td>
                    <div className="content">
                        {this.props.user.city}
                    </div>
                </td>
                <td>
                    <div className="content">
                        {this.state.active}
                    </div>
                </td>
                <td>
                    <div className="content">
                        <button className="ui primary button" onClick={this.deleteUser}>Delete</button>
                    </div>
                </td>
          </tr>



        )}
    
}

export default UserCard