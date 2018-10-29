import Button from '@enact/moonstone/Button';
import Divider from '@enact/moonstone/Divider';
import IconButton from '@enact/moonstone/IconButton';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Toggleable from '@enact/ui/Toggleable';
import ToggleButton from '@enact/moonstone/ToggleButton';
import TooltipDecorator from '@enact/moonstone/TooltipDecorator';

const
	StatefulButton = Toggleable({toggle: 'onClick', prop: 'selected'}, Button),
	StatefulIconButton = Toggleable({toggle: 'onClick', prop: 'selected'}, IconButton),
	StatefulToggleButton = Toggleable({toggle: 'onClick', prop: 'selected'}, ToggleButton),
	TooltipButton = TooltipDecorator(Button);

const ButtonView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<Divider>Default</Divider>
			<Button />
			<Button>Button</Button>
			<StatefulButton color="red">Red Button</StatefulButton>
			<StatefulButton color="blue">Blue Button</StatefulButton>
			<StatefulButton disabled>Disabled Button</StatefulButton>
			<Divider>Icon Buttons</Divider>
			<StatefulIconButton>play</StatefulIconButton>
			<StatefulIconButton>plus</StatefulIconButton>
			<Divider>Buttons with Tooltip</Divider>
			<TooltipButton tooltipProps={{role: 'dialog'}} tooltipText="fruit">apple</TooltipButton>
			<TooltipButton aria-label="greetings!" tooltipProps={{role: 'dialog'}} tooltipText="bye!">hello!</TooltipButton>
			<IconButton aria-label="plus icon!" tooltipProps={{role: 'dialog'}} tooltipText="plus icon!">plus</IconButton>
			<Divider>Toggle Buttons</Divider>
			<StatefulToggleButton>Toggle Button</StatefulToggleButton>
			<StatefulToggleButton disabled>Disabled Toggle Button</StatefulToggleButton>
			<StatefulToggleButton toggleOffLabel="Close" toggleOnLabel="Open" />
		</Cell>
	</Layout>
);

export default ButtonView;
