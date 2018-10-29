import Divider from '@enact/moonstone/Divider';
import IncrementSlider from '@enact/moonstone/IncrementSlider';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from '@enact/moonstone/Slider';

class CustomIncrementSlider extends React.Component {
	static propTypes = {
		customText: PropTypes.string
	}
	constructor (props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	handleChange = (ev) => {
		this.setState({
			value: ev.value
		});
	}

	render () {
		const valueText = `${this.props.customText} ${this.state.value}`;

		return (
			<IncrementSlider aria-valuetext={valueText} onChange={this.handleChange} value={this.state.value} />
		);
	}
}

const SliderView = () => (
	<div>
		<Divider>Default</Divider>
		<Slider />
		<Divider>IncrementSlider</Divider>
		<IncrementSlider />
		<Divider>IncrementSlider with customizable aria-labels</Divider>
		<IncrementSlider decrementAriaLabel="Decrement" incrementAriaLabel="Increment" />
		<Divider>IncrementSlider using ValueText</Divider>
		<CustomIncrementSlider customText="Volume" />
	</div>
);

export default SliderView;
