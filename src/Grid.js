import React, { Component } from 'react';
import Box from './Box';
import './Grid.css';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markerColor: '#82AEB1',
			color: '#668586'
		};
		this.erase = this.erase.bind(this);
		this.draw = this.draw.bind(this);
		this.makeGrid = this.makeGrid.bind(this);
	}

	erase() {
		this.setState({ markerColor: '#668586' });
	}

	draw() {
		this.setState({ markerColor: '#82AEB1' });
	}

	makeGrid() {
		let boxes = Array.from({ length: window.innerWidth / 24 }).map(() => (
			<Box markerColor={this.state.markerColor} color={this.state.color} />
		));
		return Array.from({ length: window.innerHeight / 24 }).map(() => <div>{boxes}</div>);
	}

	render() {
		return (
			<div className='Grid'>
				<h1>Etch A Sketch</h1>
				{this.makeGrid()}
				<button onClick={this.erase}>Erase</button>
				<button onClick={this.draw}>Draw</button>
			</div>
		);
	}
}

export default Grid;
