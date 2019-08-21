import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
    <div className="logo" style={{fontSize: `${props.size}em`}}>
        MovieApp
    </div>
);

Logo.propTypes = {
  size: PropTypes.number
};

Logo.defaultProps = {
    size: 1.75
};

export default Logo;