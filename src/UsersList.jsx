import React, {Component} from 'react'
import PropTypes from 'prop-types'

import User from './User'

class UsersList extends Component {
	render() {
		const {users} = this.props

		if (!users) {
			return null
		}

		return (
			<ul className="users-list">
				{users.map(user => <User key={user.email} user={user}/>)}
			</ul>
		)
	}
}

UsersList.propTypes = {
	users: PropTypes.array.isRequired
}

export default UsersList
