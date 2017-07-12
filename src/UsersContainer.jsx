import React, {Component} from 'react'

import UsersList from './UsersList'
import LoadMore from './LoadMore'

const URL = 'https://randomuser.me/api/'

class UsersContainer extends Component {
	constructor(props) {
		super ();
		
		this.state = {
			users: []
		}
	}

	setUsers (users) {
		this.setState ({
			users: [...this.state.users, ...users]
		})
	}

	render() {
		const {users} = this.state
			
		return (
			<div>
				<UsersList users={users}/>
				<LoadMore url={URL} callback={this.setUsers.bind(this)}/>
			</div>
		)		
	}
}

export default UsersContainer
