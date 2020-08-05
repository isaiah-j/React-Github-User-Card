import React from 'react';
import SearchUser from './searchuser';
import axios from 'axios';
import User from './user';
import { findByPlaceholderText } from '@testing-library/react';
class Profiles extends React.Component {
	state = {
		username: '',
		userProfile: {}
	};
	fetchUser = (username) => {
		axios
			.get(`https://api.github.com/users/${username}`)
			.then((res) => {
				this.setState({ userProfile: res.data });
				return axios.get(res.data.followers_url);
			})
			.then((followers) => {
				console.log(followers.data);
				this.setState((prevState) => ({
					userProfile: {
						...prevState.userProfile,
						followers_list: followers.data
					}
				}));
				console.log(this.state.userProfile);
			})
			.catch(() => {
				alert("User doesn't exist");
			});
	};
	setUsername = (value) => {
		this.setState({ username: value });
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			this.fetchUser(this.state.username);
		}
	}

	render() {
		let { login, html_url, email, bio, name, company, followers_list, avatar_url } = this.state.userProfile;
		return (
			<div>
				<SearchUser setUsername={this.setUsername} />
				<User
					login={login}
					html_url={html_url}
					email={email}
					bio={bio}
					name={name}
					company={company}
					followers_list={followers_list}
					avatar_url={avatar_url}
				/>
			</div>
		);
	}
}

export default Profiles;
