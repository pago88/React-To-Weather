var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
            return {
                city: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(api.fetchCurrentForecast(this.state.city));
        console.log(api.fetchFiveDayForecast(this.state.city));
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} className={this.props.orientation === 'row' ? 'row' : 'column'}>
                <input
                    id='city'
                    placeholder='Austin, TX'
                    type='text'
                    autoComplete='off'
                    value = {this.state.city}
                    onChange = {this.handleChange}
                />
                <button
                    className='button'
                    type='submit'>
                        Get Weather
                </button>
            </form>
        )
    }
}

Search.propTypes = {
    orientation: PropTypes.string.isRequired
}

Search.defaultProps = {
    orientation: 'column'
}

 

module.exports = Search;