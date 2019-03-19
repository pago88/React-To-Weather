var React = require('react');
var Search = require('./Search');

class Home extends React.Component {
    render() {
        return (
            <div className='homeContainer'>
                <div className = 'homeContainer' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1>Enter a City and State</h1>
                    <Search orientation='column' />
                </div>
            </div>
        )
    }
}

module.exports = Home;