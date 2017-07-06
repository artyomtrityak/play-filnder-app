import React from 'react';

const Icon = (props) => {
  return (
    <svg style={{ width: 16, height: 16 }}>
      <use xlinkHref={`#${props.iconName}`} />
      <g>
        <title>{props.title}</title>
        <rect x="0" y="0" width="100%" height="100%" fill="transparent" stroke="transparent" />
      </g>
    </svg>
  );
};

Icon.propTypes = {
  iconName: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Icon;
