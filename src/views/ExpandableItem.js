import Divider from '@enact/moonstone/Divider';
import ExpandableItem from '@enact/moonstone/ExpandableItem';
import Icon from '@enact/moonstone/Icon';
import Item from '@enact/moonstone/Item';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

const ExpandableItemView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<ExpandableItem
				title="title"
			>
				<Item>
					This can be any type of content you might want to
					render inside a labeled expandable container
				</Item>
				<Item>
					<Icon>star</Icon> You could include other components as well <Icon>star</Icon>
				</Item>
			</ExpandableItem>
			<Divider>Customizable aria-labels</Divider>
			<ExpandableItem
				title="title"
			>
				<Item aria-label="first item">
					This can be any type of content you might want to
					render inside a labeled expandable container
				</Item>
				<Item aria-label="second item">
					<Icon>star</Icon> You could include other components as well <Icon>star</Icon>
				</Item>
			</ExpandableItem>
		</Cell>
	</Layout>
);

export default ExpandableItemView;
