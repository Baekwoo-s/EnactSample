import Button from '@enact/moonstone/Button';
import LS2Request from '@enact/webos/LS2Request';
import React from 'react';
import {readAlert} from '@enact/webos/speech';
import ToggleButton from '@enact/moonstone/ToggleButton';

class LunacallView extends React.Component {
	constructor () {
		super();
		this.state = {
			audioGuidance: false
		};

		if (window.PalmServiceBridge) {
			new LS2Request().send({
				service: 'luna://com.webos.settingsservice/',
				method: 'getSystemSettings',
				parameters: {
					category: 'option',
					keys: ['audioGuidance']
				},
				subscribe: true,
				onSuccess: (res) => {
					this.setState({
						audioGuidance: res.settings.audioGuidance === 'on'
					});
				}
			});
		}

		this.onClick1 = this.onClick(true);
		this.onClick2 = this.onClick(false);
	}

	onClick = (clear) => () => {
		readAlert('Enact is a framework designed to be performant, customizable and well structured.', clear);
	}

	onToggle = () => {
		if (window.PalmServiceBridge) {
			this.setState(state => ({
				audioGuidance: !state.audioGuidance
			}), () => {
				new LS2Request().send({
					service: 'luna://com.webos.settingsservice/',
					method: 'setSystemSettings',
					parameters: {
						category: 'option',
						settings: {
							audioGuidance: this.state.audioGuidance ? 'on' : 'off'
						}
					}
				});
			});
		}
	}

	render = () => {
		return (
			<div>
				<ToggleButton
					onToggle={this.onToggle}
					toggleOffLabel="Audio guidance off"
					toggleOnLabel="Audio guidance on"
					selected={this.state.audioGuidance}
				/>
				<Button onClick={this.onClick1}>readAlert test(clear true)</Button>
				<Button onClick={this.onClick2}>readAlert test(clear false)</Button>
			</div>
		);
	}
}

export default LunacallView;
