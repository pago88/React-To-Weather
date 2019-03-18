var React = require('react');

class Header extends React.Component {
    render () {
        return (
            <div className='navbar'>
                <h2>Header</h2>
                <div className='header-container'>
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

module.exports = Header;