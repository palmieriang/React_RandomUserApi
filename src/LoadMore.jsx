import React, {Component} from 'react'
import PropTypes from 'prop-types'

class LoadMore extends Component {
	constructor (props) {
		super()

		this.state = {
			results: props.results || 12,
			page: 1
		}
	}

	componentDidMount () {
		this.callApi()
	}

	updatePagination () {
		this.setState({
			page: this.state.page + 1
		}, this.callApi)
	}

	callApi () {
		const {url, callback} = this.props
		const query = Object.keys(this.state).map(key => `${key}=${this.state[key]}`).join('&')

		window.fetch(`${url}?${query}`)
			.then(
				response => response.json(),
				error => console.error(error)
			)
			.then(data => callback(data.results))
	}

	render () {
		return (
      <div className="load-more-wrapper">
        <div className="load-more" onClick={this.updatePagination.bind(this)}>Load more</div>
      </div>
		)
	}
}

LoadMore.propTypes = {
	results: PropTypes.number,
	url: PropTypes.string.isRequired,
	callback: PropTypes.func.isRequired
}

export default LoadMore
