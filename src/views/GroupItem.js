import Button from '@enact/moonstone/Button';
import Divider from '@enact/moonstone/Divider';
import Group from '@enact/ui/Group';
import React from 'react';

const GroupItemView = () => (
	<div>
		<Divider>Default</Divider>
		<Group
			childComponent={Button}
			select={'radio'}
			selectedProp="selected"
			defaultSelected={0}
		>
			{['Item 1', 'Item 2', 'Item 3']}
		</Group>
		<Divider>Customizable aria-labels</Divider>
		<Group
			childComponent={Button}
			select={'radio'}
			selectedProp="selected"
			defaultSelected={0}
		>
			{[
				{'aria-label': 'first item', children: 'Item 1', key: 1},
				{'aria-label': 'second item', children: 'Item 2', key: 2},
				{'aria-label': 'third item', children: 'Item 3', key: 3}
			]}
		</Group>
	</div>
);

export default GroupItemView;
