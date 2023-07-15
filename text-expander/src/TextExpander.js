import React, { useState } from 'react';

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = 'blue',
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...';

  const buttonStyle = {
    backgroundColor: 'none',
    border: 'none',
    color: buttonColor,
    font: 'inherit',
    marginLeft: '6px',
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
