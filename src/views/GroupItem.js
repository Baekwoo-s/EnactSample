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
	</div>
);

export default GroupItemView;
