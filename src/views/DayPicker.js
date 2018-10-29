import DayPicker from '@enact/moonstone/DayPicker';
import Divider from '@enact/moonstone/Divider';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

const DayPickerView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<DayPicker
				noneText="none"
				title="Day Picker"
			/>
			<Divider>Customizable labels</Divider>
			<DayPicker
				everyDayText="Selected every day"
				everyWeekdayText="Selected every weekday"
				everyWeekendText="Selected every weekend"
				noneText="none"
				title="Day Picker"
			/>
		</Cell>
	</Layout>
);

export default DayPickerView;
