import React from 'react';

class SearchUser extends React.Component {
	state = {
		searchField: ''
    };

    handleSubmit = e => {
        e.preventDefault()
        // send to state above it
        console.log('submitted')
        console.log(this.props)
        this.props.setUsername(this.state.searchField)
    }
    handleChange = e => {
        this.setState({searchField: e.target.value})
        console.log(this.state.searchField)
    }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} type="text" placeholder="username" value={this.searchField} />
                <button>Search</button>
			</form>
		);
	}
}

export default SearchUser