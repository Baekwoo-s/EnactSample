import Item from '@enact/moonstone/Item';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Region from '@enact/moonstone/Region';
import ri from '@enact/ui/resolution';
import ToggleButton from '@enact/moonstone/ToggleButton';
import VirtualList from '@enact/moonstone/VirtualList';

const
	horizontalStyle = {
		width: ri.scale(170),
		height: ri.scale(660),
		borderRight: ri.scale(2) + 'px solid #202328',
		boxSizing: 'border-box'
	},
	items = [],
	verticalStyle = {
		borderBottom: ri.scale(2) + 'px solid #202328',
		boxSizing: 'border-box'
	},
	// eslint-disable-next-line enact/prop-types, enact/display-name
	renderItem = (isHorizontalList) => ({index, ...rest}) => {
		return (
			<Item
				{...rest}
				style={isHorizontalList ? horizontalStyle : verticalStyle}
			>
				{items[index]}
			</Item>
		);
	};

for (let i = 0; i < 100; i++) {
	items.push('Item ' + ('00' + i).slice(-3));
}

class VirtualListView extends React.Component {
	constructor () {
		super();
		this.state = {
			isHorizontalList: false
		};
	}

	onClickChangeDirectionButton = () => {
		this.setState((state) => ({isHorizontalList: !state.isHorizontalList}));
	}

	render () {
		const isHorizontalList = this.state.isHorizontalList;

		return (
			<Layout orientation="vertical">
				<Cell shrink>
					<ToggleButton
						onClick={this.onClickChangeDirectionButton}
						selected={isHorizontalList}
						toggleOffLabel="change to horizontal list"
						toggleOnLabel="change to vertical list"
					/>
				</Cell>
				<Cell component={Region} title="X of Y feature" shrink />
				<Cell
					component={VirtualList}
					dataSize={items.length}
					direction={isHorizontalList ? 'horizontal' : 'vertical'}
					focusableScrollbar
					itemRenderer={renderItem(isHorizontalList)}
					itemSize={ri.scale(isHorizontalList ? 170 : 72)}
				/>
			</Layout>
		);
	}
}

export default VirtualListView;
