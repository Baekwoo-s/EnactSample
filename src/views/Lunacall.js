import LS2Request from '@enact/webos/LS2Request';
import React from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';

class LunacallView extends React.Component {
	constructor () {
		super();
		this.state = {
			standByLight: false
		};

		if (window.PalmServiceBridge) {
			new LS2Request().send({
				service: 'luna://com.webos.settingsservice/',
				method: 'getSystemSettings',
				parameters: {
					category: 'option',
					keys: ['standByLight']
				},
				subscribe: true,
				onSuccess: (res) => {
					this.setState({
						standByLight: res.settings.standByLight === 'on'
					});
				}
			});
		}
	}

	onToggle = () => {
		if (window.PalmServiceBridge) {
			this.setState(state => ({
				standByLight: !state.standByLight
			}), () => {
				new LS2Request().send({
					service: 'luna://com.webos.settingsservice/',
					method: 'setSystemSettings',
					parameters: {
						category: 'option',
						settings: {
							standByLight: this.state.standByLight ? 'on' : 'off'
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
					toggleOffLabel="StandByLight off"
					toggleOnLabel="StandByLight on"
					selected={this.state.standByLight}
				/>
			</div>
		);
	}
}

export default LunacallView;
