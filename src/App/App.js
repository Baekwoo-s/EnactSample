import Changeable from '@enact/ui/Changeable';
import Group from '@enact/ui/Group';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import Layout, {Cell} from '@enact/ui/Layout';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollerComponent from '@enact/moonstone/Scroller';
import ViewManager from '@enact/ui/ViewManager';

import Button from '../views/Button';
import ContextualPopupDecorator from '../views/ContextualPopupDecorator';
import DayPicker from '../views/DayPicker';
import Dialog from '../views/Dialog';
import ExpandableItem from '../views/ExpandableItem';
import ExpandableList from '../views/ExpandableList';
import GroupItem from '../views/GroupItem';
import Input from '../views/Input';
import ItemView from '../views/Item';
import Notification from '../views/Notification';
import Panels from '../views/Panels';
import Picker from '../views/Picker';
import Popup from '../views/Popup';
import ProgressBar from '../views/ProgressBar';
import ReadAlert from '../views/ReadAlert';
import ReadOrder from '../views/ReadOrder';
import Scroller from '../views/Scroller';
import Slider from '../views/Slider';
import Spinner from '../views/Spinner';
import TooltipDecorator from '../views/TooltipDecorator';
import VideoPlayer from '../views/VideoPlayer';
import VirtualList from '../views/VirtualList';

import css from './App.less';
import Home from './Home';
import View from './View';

const views = [
	{title: 'About EnactSample', view: Home},
	{title: 'Button', view: Button},
	{title: 'ContextualPopupDecorator', view: ContextualPopupDecorator},
	{title: 'DayPicker', view: DayPicker},
	{title: 'Dialog', view: Dialog},
	{title: 'ExpandableItem', view: ExpandableItem},
	{title: 'ExpandableList', view: ExpandableList},
	{title: 'GroupItem', view: GroupItem},
	{title: 'Input', view: Input},
	{title: 'Item', view: ItemView},
	{title: 'Notification', view: Notification},
	{isHeader: false, title: 'Panels', view: Panels},
	{title: 'Picker', view: Picker},
	{title: 'Popup', view: Popup},
	{title: 'ProgressBar', view: ProgressBar},
	{title: 'ReadAlert', view: ReadAlert},
	{title: 'ReadOrder', view: ReadOrder},
	{title: 'Scroller', view: Scroller},
	{title: 'Slider', view: Slider},
	{title: 'Spinner', view: Spinner},
	{title: 'TooltipDecorator', view: TooltipDecorator},
	{isAriaHidden: true, title: 'VideoPlayer', view: VideoPlayer},
	{title: 'VirtualList', view: VirtualList}
];

const AppBase = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number,
		onChange: PropTypes.func
	},

	styles: {
		css,
		className: 'app'
	},

	computed: {
		handleChange: ({onChange}) => ({selected}) => {
			onChange({index: selected});
		}
	},

	render: ({handleChange, index, ...rest}) => {
		delete rest.onChange;

		return (
			<Layout {...rest}>
				<Cell component={ScrollerComponent} size="20%">
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell>
				<Cell component={ViewManager} index={index}>
					{views.map((view, i) => (
						<View {...view} key={i} />
					))}
				</Cell>
			</Layout>
		);
	}
});

const App = MoonstoneDecorator(Changeable({prop: 'index', change: 'onChange'}, AppBase));

export default App;
