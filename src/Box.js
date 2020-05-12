import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color
		};
		this.handleHover = this.handleHover.bind(this);
	}

	handleHover() {
		this.setState({ color: this.props.markerColor });
	}

	render() {
		return (
			<span>
				<span style={{ backgroundColor: this.state.color }} onMouseEnter={this.handleHover} className='Box' />
			</span>
		);
	}
}

export default Box;
