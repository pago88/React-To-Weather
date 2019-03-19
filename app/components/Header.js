var React = require('react');
var Search = require('./Search');

class Header extends React.Component {
    render () {
        return (
            <div className='navbar'>
                <h1>React to Weather</h1>
                <Search orientation='row' />
            </div>
        )
    }
}



module.exports = Header;