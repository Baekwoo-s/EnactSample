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
		const posinset = index + 1;

		return (
			<Item
				{...rest}
				aria-posinset={posinset}
				aria-setsize={items.length}
				role="listitem"
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
			isHorizontalList: false,
			setAriaLabel: false
		};
	}

	onClickChangeAriaLabelButton = () => {
		this.setState((state) => ({setAriaLabel: !state.setAriaLabel}));
	}

	onClickChangeDirectionButton = () => {
		this.setState((state) => ({isHorizontalList: !state.isHorizontalList}));
	}

	render () {
		const
			isHorizontalList = this.state.isHorizontalList,
			setAriaLabel = this.state.setAriaLabel;

		return (
			<Layout orientation="vertical">
				<Cell shrink>
					<ToggleButton
						onClick={this.onClickChangeAriaLabelButton}
						selected={setAriaLabel}
						toggleOffLabel="default on ScrollButtons"
						toggleOnLabel="Customizable aria-labels on ScrollButtons"
					/>
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
					scrollDownAriaLabel={setAriaLabel ? 'This is scroll down' : null}
					scrollUpAriaLabel={setAriaLabel ? 'This is scroll up' : null}
				/>
			</Layout>
		);
	}
}

export default VirtualListView;
