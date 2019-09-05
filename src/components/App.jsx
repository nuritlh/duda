import React from 'react';

import UserList from './users/UserList';

class App extends React.Component{
    state = {};

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <UserList />
            </div>
        )
    }
}

export default App;