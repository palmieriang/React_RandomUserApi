import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
	constructor() {
		super();
		this.state = {
			infoBox: false
		}
	}

	moreInfo () {
		const {infoBox} = this.state

		this.setState({
			infoBox: !infoBox
		})
	}

	render () {
		const {user} = this.props
		const {infoBox} = this.state

		if (!user) {
			return null
		}

		return (
			<li className="user">
				<img className="user__image" src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`}/>
				<div className="user__name">{user.name.first} {user.name.last}</div>
				<div className="user__email">{user.email}</div>
				<div className="user__joined">Joined</div>
				<div className="user__registered">{user.registered}</div>
				<button className="btn" onClick={(this.moreInfo.bind(this))}>More Info</button>
				{infoBox && <div className="user__registered">{user.phone}</div>}
			</li>
		)
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired
}

export default User
