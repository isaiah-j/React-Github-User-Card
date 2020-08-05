import React from 'react';
import { Menu, MenuItem, Button, BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './user.styles.css';
class User extends React.Component {
	render() {
		const { name, login, html_url, email, bio, followers_list, avatar_url } = this.props;
		if (!followers_list && true) {
			return <p>Github User Search</p>;
		}

		return (
			// <div>
			// 	<p>{login}</p>
			// 	<a href={`${html_url}`}>{html_url}</a>
			// 	<p>{bio}</p>
			// 	<p>{email}</p>
			// 	<h1>Following</h1>
			// 	<ul>
			// 		{followers_list.map((el) => {
			// 			return <p>{el.login}</p>;
			// 		})}
			// 	</ul>
			// </div>
			<Card className={''}>
				<CardContent>
					<h2>{login}</h2>
					<img src={avatar_url} className={'github-image'} />

					<Typography variant="h5" component="h2" />
					<Typography className={''} color="textSecondary">
						{bio ? 'bio' : null}
					</Typography>
					<Typography variant="body2" component="p">
						{bio}
						<br />
					</Typography>
				</CardContent>
				<Typography>{followers_list ? 'Followers' : null}</Typography>
				<Typography>
					{followers_list.map((el) => {
						return <li>{el.login}</li>;
					})}
				</Typography>
				<CardActions>
					<Button size="small" href={html_url}>
						View on Github
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default User;
