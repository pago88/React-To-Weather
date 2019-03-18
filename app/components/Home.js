var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className='homeContainer'>
                <div className = 'homeContainer' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1>Enter a City and State</h1>
                    <input
                        placeholder='Austin, TX'
                        type='text'
                        autoComplete='off'
                    />
                    <button
                        className='button'
                        type='submit'>
                            Get Weather
                    </button>

                </div>
            </div>
        )
    }
}

module.exports = Home;