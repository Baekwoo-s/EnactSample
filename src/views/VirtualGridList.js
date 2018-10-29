import {GridListImageItem} from '@enact/moonstone/GridListImageItem';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Region from '@enact/moonstone/Region';
import ri from '@enact/ui/resolution';
import ToggleButton from '@enact/moonstone/ToggleButton';
import {VirtualGridList} from '@enact/moonstone/VirtualList';

const
	items = [],
	// eslint-disable-next-line enact/prop-types, enact/display-name
	renderItem = ({index, ...rest}) => {
		const
			{text, subText, source} = items[index];

		return (
			<GridListImageItem
				{...rest}
				caption={text}
				source={source}
				subCaption={subText}
			/>
		);
	};

for (let i = 0; i < 100; i++) {
	const
		count = ('00' + i).slice(-3),
		text = `Item ${count}`,
		subText = `SubItem ${count}`,
		color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16),
		source = `http://placehold.it/300x300/${color}/ffffff&text=Image ${i}`;

	items.push({text, subText, source});
}

class VirtualGridListView extends React.Component {
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
		const
			{isHorizontalList} = this.state;

		return (
			<Layout orientation="vertical">
				<Cell shrink>
					<ToggleButton
						onClick={this.onClickChangeDirectionButton}
						selected={isHorizontalList}
					>
						Horizontal
					</ToggleButton>
				</Cell>
				<Cell component={Region} title="X of Y feature" shrink />
				<Cell
					component={VirtualGridList}
					dataSize={items.length}
					direction={isHorizontalList ? 'horizontal' : 'vertical'}
					focusableScrollbar
					itemRenderer={renderItem}
					itemSize={{
						minWidth: ri.scale(200),
						minHeight: ri.scale(200)
					}}
				/>
			</Layout>
		);
	}
}

export default VirtualGridListView;
