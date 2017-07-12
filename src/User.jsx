import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
	render () {
		const {user} = this.props

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
      </li>
		)
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired
}

export default User
