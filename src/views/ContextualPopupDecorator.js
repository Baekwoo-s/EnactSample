import Button from '@enact/moonstone/Button';
import ContextualPopupDecorator from '@enact/moonstone/ContextualPopupDecorator';
import Group from '@enact/ui/Group';
import RadioItem from '@enact/moonstone/RadioItem';
import React from 'react';
import Toggleable from '@enact/ui/Toggleable';

const ContextualButton = Toggleable(
	{prop: 'open', toggle: 'onClick', deactivate: 'onClose'},
	ContextualPopupDecorator(
		Button
	)
);

class ContextualPopupDecoratorView extends React.Component {

	renderPopup1 = () => (
		<div>
			<span>Item 1</span>
			<br />
			<span>Item 2</span>
			<br />
			<span>Item 3</span>
			<br />
		</div>
	)

	renderPopup2 = () => (
		<div>
			<Button>Button</Button>
			<Button>Button2</Button>
			<Button>Button3</Button>
		</div>
	)

	renderPopup3 = () => (
		<Group
			childComponent={RadioItem}
			defaultSelected={0}
			itemProps={{inline: false}}
			select="radio"
			selectedProp="selected"
		>
			{['Creek', 'River', 'Ocean']}
		</Group>
	)

	render () {
		return (
			<div>
				<div style={{position: 'absolute', left: '0'}}>
					<ContextualButton
						direction="right"
						popupComponent={this.renderPopup1}
					>
						Average
					</ContextualButton>
				</div>
				<div style={{position: 'absolute', bottom: '0'}}>
					<ContextualButton
						direction="up"
						popupComponent={this.renderPopup2}
						showCloseButton
						spotlightRestrict="self-only"
					>
						Spotlight Modal
					</ContextualButton>
				</div>

				<div style={{position: 'absolute', right: '0'}}>
					<ContextualButton
						direction="left"
						popupComponent={this.renderPopup3}
					>
						Nested Radio
					</ContextualButton>
				</div>
			</div>
		);
	}
}

export default ContextualPopupDecoratorView;
