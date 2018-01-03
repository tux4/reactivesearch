import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
	ReactiveBase,
	RangeSlider,
	ReactiveList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';

import './index.css';

class Main extends Component {
	render() {
		return (
			<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row">
					<div className="col">
						<RangeSlider
							dataField="rating"
							componentId="RangeSlider"
							title="Range Slider"
							range={{
								start: 0,
								end: 6,
							}}
							rangeLabels={{
								start: 'Start',
								end: 'End',
							}}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							title="ReactiveList"
							from={0}
							size={20}
							onData={this.onData}
							pagination
							react={{
								and: 'RangeSlider',
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}

	onData(data) {
		return (
			<div key={data._id}>
				<h2>{data.name}</h2>
				<p>{data.price} - {data.rating} stars rated</p>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));