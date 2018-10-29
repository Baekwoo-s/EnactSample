import Button from '@enact/moonstone/Button';
import React from 'react';
import TooltipDecorator from '@enact/moonstone/TooltipDecorator';

const
	TooltipButton = TooltipDecorator(Button),
	tooltipProps = {'aria-hidden': true};

const TooltipDecoratorView = () => (
	<div>
		<TooltipButton
			aria-label="I'm a left tooltip."
			style={{position: 'absolute', left: '0'}}
			tooltipPosition="below right"
			tooltipProps={tooltipProps}
			tooltipText="I'm a left tooltip."
		>
			Left Tooltip
		</TooltipButton>

		<TooltipButton
			aria-label="I'm an aria-hidden tooltip."
			style={{position: 'absolute', left: '40%'}}
			tooltipPosition="below center"
			tooltipProps={tooltipProps}
			tooltipText="I'm an aria-hidden tooltip."
		>
			Center Tooltip
		</TooltipButton>

		<TooltipButton
			aria-label="I'm a right tooltip."
			style={{position: 'absolute', right: '0'}}
			tooltipPosition="below left"
			tooltipProps={tooltipProps}
			tooltipText="I'm a right tooltip."
		>
			Right Tooltip
		</TooltipButton>

		<TooltipButton
			aria-label="I'm a left floating tooltip."
			style={{position: 'absolute', bottom: '0', left: '0'}}
			tooltipPosition="above right"
			tooltipProps={tooltipProps}
			tooltipText="I'm a left floating tooltip."
		>
			Item With Left Floating Tooltip
		</TooltipButton>

		<TooltipButton
			aria-label="I'm a right floating tooltip."
			style={{position: 'absolute', bottom: '0', right: '0'}}
			tooltipPosition="above left"
			tooltipProps={tooltipProps}
			tooltipText="I'm a right floating tooltip."
		>
			Item With Right Floating Tooltip
		</TooltipButton>
	</div>
);

export default TooltipDecoratorView;
