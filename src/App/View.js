import {Header, Panel} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const View = ({isAriaHidden = false, isHeader = true, title, view: ComponentView}) => {
	let header;

	if (isHeader) {
		header = <Header aria-hidden={isAriaHidden} title={title} type="compact" />;
	}

	return (
		<Panel aria-owns="floatLayer" style={{padding: 0}}>
			{header}
			<ComponentView />
		</Panel>
	);
};

View.propTypes = {
	isAriaHidden: PropTypes.bool,
	isHeader: PropTypes.bool,
	title: PropTypes.string,
	view: PropTypes.func
};

export default View;
