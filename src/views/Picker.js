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
	emoticons = ['💥 boom', '😩🖐 facepalm', '🍩 doughnut', '👻 ghost', '💍 ring', '🎮 videogame', '🍌🍌 bananas'];

const PickerView = () => (
	<Scroller focusableScrollbar>
		<span>
			<Divider>Default</Divider>
			<Divider>Picker</Divider>
			<Picker
				orientation="horizontal"
				width="medium"
			>
				{airports}
			</Picker>

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
	</Scroller>
);

export default PickerView;
