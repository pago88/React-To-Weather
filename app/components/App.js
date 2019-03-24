var React = require('react');
var Home = require('./Home');
var Header = require('./Header');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
    render () {
        return (

            <Router>
                <div className = 'container'>
                    <Route component={Header}/>
                    <Route exact path='/' component={Home} />
                    <Route path='/forecast' component={Forecast} />
                </div>
            </Router>
        )
    }
}

module.exports = App;