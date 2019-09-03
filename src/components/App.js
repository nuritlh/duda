import React from 'react';

import fakeData from './data/fakeData';

class App extends React.Component{
    state = {};

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {fakeData.fakeData.title}
            </div>
        )
    }
}

export default App;