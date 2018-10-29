import Divider from '@enact/moonstone/Divider';
import ExpandableList from '@enact/moonstone/ExpandableList';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

const
	noneText = 'nothing selected',
	title = 'title';

const ExpandableListView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<ExpandableList
				noneText={noneText}
				select="multiple"
				title={title}
			>
				{['option1', 'option2', 'option3']}
			</ExpandableList>
		</Cell>
	</Layout>
);

export default ExpandableListView;
