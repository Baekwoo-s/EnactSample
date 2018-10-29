import {CheckboxItem as CheckboxItemBase} from '@enact/moonstone/CheckboxItem';
import Divider from '@enact/moonstone/Divider';
import Item from '@enact/moonstone/Item';
import Icon from '@enact/moonstone/Icon';
import LabeledItem from '@enact/moonstone/LabeledItem';
import Layout, {Cell} from '@enact/ui/Layout';
import {RadioItem as RadioItemBase} from '@enact/moonstone/RadioItem';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import {SelectableItem as SelectItemBase} from '@enact/moonstone/SelectableItem';
import {SwitchItem as SwitchItemBase} from '@enact/moonstone/SwitchItem';
import Toggleable from '@enact/ui/Toggleable';
import {ToggleItem as ToggleItemBase} from '@enact/moonstone/ToggleItem';

const CheckboxItem = Toggleable({prop: 'selected'}, CheckboxItemBase);
const RadioItem = Toggleable({prop: 'selected'}, RadioItemBase);
const SelectableItem = Toggleable({prop: 'selected'}, SelectItemBase);
const SwitchItem = Toggleable({prop: 'selected'}, SwitchItemBase);
const ToggleItem = Toggleable({prop: 'selected'}, ToggleItemBase);

const
	CustomIcon = (props) => <Icon {...props}>lock</Icon>,
	itemColumn = {
		display: 'inline-block',
		width: '50%',
		verticalAlign: 'top'
	};

const ItemView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<div style={itemColumn}>
				<Divider>Default</Divider>
				<Item />
				<Item>Item</Item>
				<Item disabled>Disabled Item</Item>
				<Divider>Checkbox Item</Divider>
				<CheckboxItem>Checkbox</CheckboxItem>
				<Divider>Labeled Item</Divider>
				<LabeledItem label="Label">Labeled item</LabeledItem>
				<Divider>Radio Item</Divider>
				<RadioItem>Radio item</RadioItem>
				<Divider>Selectable Item</Divider>
				<SelectableItem>Selectable item</SelectableItem>
			</div>
			<div style={itemColumn}>
				<Divider>Switch Item</Divider>
				<SwitchItem>Switch item</SwitchItem>
				<Divider>Toggle Item</Divider>
				<ToggleItem iconComponent={CustomIcon}>Toggle item</ToggleItem>
				<Divider>Aria-labled Items</Divider>
				<Item aria-label="item">Item</Item>
				<LabeledItem label="Label" aria-label="labeled item">Labeled item</LabeledItem>
			</div>
		</Cell>
	</Layout>
);

export default ItemView;
