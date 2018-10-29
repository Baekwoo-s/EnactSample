import Button from '@enact/moonstone/Button';
import React from 'react';
import TooltipDecorator from '@enact/moonstone/TooltipDecorator';

const TooltipButton = TooltipDecorator(Button);

const TooltipDecoratorView = () => (
	<div>
		<TooltipButton
			style={{position: 'absolute', left: '0'}}
			tooltipPosition="below right"
			tooltipText="I'm a left tooltip."
		>
			Left Tooltip
		</TooltipButton>

		<TooltipButton
			style={{position: 'absolute', left: '40%'}}
			tooltipPosition="below center"
			tooltipText="I'm an aria-hidden tooltip."
		>
			Center Tooltip
		</TooltipButton>

		<TooltipButton
			style={{position: 'absolute', right: '0'}}
			tooltipPosition="below left"
			tooltipText="I'm a right tooltip."
		>
			Right Tooltip
		</TooltipButton>

		<TooltipButton
			style={{position: 'absolute', bottom: '0', left: '0'}}
			tooltipPosition="above right"
			tooltipText="I'm a left floating tooltip."
		>
			Item With Left Floating Tooltip
		</TooltipButton>

		<TooltipButton
			style={{position: 'absolute', bottom: '0', right: '0'}}
			tooltipPosition="above left"
			tooltipText="I'm a right floating tooltip."
		>
			Item With Right Floating Tooltip
		</TooltipButton>
	</div>
);

export default TooltipDecoratorView;
