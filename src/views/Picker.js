import DatePicker from '@enact/moonstone/DatePicker';
import Divider from '@enact/moonstone/Divider';
import ExpandablePicker from '@enact/moonstone/ExpandablePicker';
import Picker from '@enact/moonstone/Picker';
import RangePicker from '@enact/moonstone/RangePicker';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import TimePicker from '@enact/moonstone/TimePicker';

const
	airports = [
		'San Francisco Airport Terminal Gate 1',
		'Boston Airport Terminal Gate 2',
		'Tokyo Airport Terminal Gate 3',
		'נמל התעופה בן גוריון טרמינל הבינלאומי'
	],
	emoticons = ['💥 boom', '😩🖐 facepalm', '🍩 doughnut', '👻 ghost', '💍 ring', '🎮 videogame', '🍌🍌 bananas'],
	pickerSpanStyle = {
		display: 'inline-block',
		width: '50%',
		verticalAlign: 'top'
	},
	subjects = ['English', 'Maths', 'Korean', 'Science', 'History'],
	subjectValue = ['80', '90', '100', '70', '50'];

class CustomPicker extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0
		};
	}

	handleChange = (ev) => {
		this.setState({
			index: ev.value
		});
	}

	render () {
		const
			{index} = this.state,
			{children} = this.props,
			valueText = `${children[index]} ${subjectValue[index]}`;

		return (
			<Picker aria-valuetext={valueText} onChange={this.handleChange} {...this.props}>{children}</Picker>
		);
	}
}

const PickerView = () => (
	<Scroller focusableScrollbar>
		<span style={pickerSpanStyle}>
			<Divider>Default</Divider>
			<Divider>Picker</Divider>
			<Picker
				orientation="horizontal"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>Picker With Accessibility Value</Divider>
			<CustomPicker
				orientation="horizontal"
				width="medium"
			>
				{subjects}
			</CustomPicker>

			<Divider>Joined Picker</Divider>
			<Picker
				joined
				orientation="horizontal"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>Vertical Picker</Divider>
			<Picker
				orientation="vertical"
				width="medium"
			>
				{airports}
			</Picker>
			<Picker
				joined
				orientation="vertical"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>RangePicker</Divider>
			<RangePicker
				defaultValue={0}
				max={100}
				min={0}
				orientation="horizontal"
				step={5}
				width="medium"
			/>

			<Divider>Joined RangePicker</Divider>
			<RangePicker
				defaultValue={0}
				joined
				max={100}
				min={0}
				orientation="horizontal"
				step={5}
				width="medium"
			/>

			<Divider>Vertical RangePicker</Divider>
			<RangePicker
				defaultValue={0}
				max={100}
				min={0}
				orientation="vertical"
				step={5}
				width="medium"
			/>
			<RangePicker
				defaultValue={0}
				joined
				max={100}
				min={0}
				orientation="vertical"
				step={5}
				width="medium"
			/>

			<Divider>ExpandablePicker</Divider>
			<ExpandablePicker
				title="Favorite Emoji"
				width="medium"
			>
				{emoticons}
			</ExpandablePicker>

			<Divider>DatePicker</Divider>
			<DatePicker
				noLabels={false}
				noneText="Nothing Selected"
				title="Date"
			/>

			<Divider>TimePicker</Divider>
			<TimePicker
				noLabels={false}
				noneText="Nothing Selected"
				title="Time"
			/>
		</span>

		<span style={pickerSpanStyle}>
			<Divider>Customizable aria-labels</Divider>
			<Divider>Picker</Divider>
			<Picker
				decrementAriaLabel="Decrement"
				incrementAriaLabel="Increment"
				orientation="horizontal"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>Picker With Accessibility Value</Divider>
			<CustomPicker
				decrementAriaLabel="Decrement"
				incrementAriaLabel="Increment"
				orientation="horizontal"
				width="medium"
			>
				{subjects}
			</CustomPicker>

			<Divider>Joined Picker</Divider>
			<Picker
				aria-label="Joined Picker"
				joined
				orientation="horizontal"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>Vertical Picker</Divider>
			<Picker
				decrementAriaLabel="Decrement"
				incrementAriaLabel="Increment"
				orientation="vertical"
				width="medium"
			>
				{airports}
			</Picker>
			<Picker
				aria-label="Joined Picker"
				joined
				orientation="vertical"
				width="medium"
			>
				{airports}
			</Picker>

			<Divider>RangePicker</Divider>
			<RangePicker
				decrementAriaLabel="Decrement"
				defaultValue={0}
				incrementAriaLabel="Increment"
				max={100}
				min={0}
				orientation="horizontal"
				step={5}
				width="medium"
			/>

			<Divider>Joined RangePicker</Divider>
			<RangePicker
				aria-label="Joined range Picker"
				defaultValue={0}
				joined
				max={100}
				min={0}
				orientation="horizontal"
				step={5}
				width="medium"
			/>

			<Divider>Vertical RangePicker</Divider>
			<RangePicker
				decrementAriaLabel="Decrement"
				defaultValue={0}
				incrementAriaLabel="Increment"
				max={100}
				min={0}
				orientation="vertical"
				step={5}
				width="medium"
			/>
			<RangePicker
				aria-label="Joined range Picker"
				defaultValue={0}
				joined
				max={100}
				min={0}
				orientation="vertical"
				step={5}
				width="medium"
			/>

			<Divider>ExpandablePicker</Divider>
			<ExpandablePicker
				checkButtonAriaLabel="Check"
				decrementAriaLabel="Decrement"
				incrementAriaLabel="Increment"
				title="Favorite Emoji"
				width="medium"
			>
				{emoticons}
			</ExpandablePicker>

			<Divider>DatePicker</Divider>
			<DatePicker
				dayAriaLabel="Day picker"
				dayLabel="My Day"
				monthAriaLabel="Month picker"
				monthLabel="My Month"
				noLabels={false}
				noneText="Nothing Selected"
				title="Date"
				yearAriaLabel="Year picker"
				yearLabel="My Year"
			/>

			<Divider>TimePicker</Divider>
			<TimePicker
				hourAriaLabel="Hour picker"
				hourLabel="HR"
				meridiemAriaLabel="Meridiem picker"
				minuteAriaLabel="Minute picker"
				minuteLabel="MIN"
				noLabels={false}
				noneText="Nothing Selected"
				title="Time"
			/>
		</span>
	</Scroller>
);

export default PickerView;
