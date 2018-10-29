import Divider from '@enact/moonstone/Divider';
import IconButton from '@enact/moonstone/IconButton';
import ProgressBar from '@enact/moonstone/ProgressBar';
import React from 'react';

class ProgressBarView extends React.Component {
	constructor () {
		super();
		this.state = {
			progressVal: 0.3
		};
	}

	onInc = () => {
		this.setState(state => ({
			progressVal : Math.min((state.progressVal + 0.1).toFixed(1), 1)
		}));
	}

	onDec = () => {
		this.setState(state => ({
			progressVal : Math.max((state.progressVal - 0.1).toFixed(1), 0)
		}));
	}

	render = () => {
		const {progressVal} = this.state;
		let a11yValueText;

		if (progressVal === 0.5) {
			a11yValueText = '50% progressing';
		} else if (progressVal === 1) {
			a11yValueText = 'Completed';
		}

		return (
			<div>
				<Divider>Default</Divider>
				<ProgressBar aria-live="assertive" aria-label={a11yValueText} progress={progressVal} />
				<br />
				<IconButton aria-label="Increase" onClick={this.onInc}>plus</IconButton>
				<IconButton aria-label="Decrease" onClick={this.onDec}>minus</IconButton>
			</div>
		);
	}
}

export default ProgressBarView;
