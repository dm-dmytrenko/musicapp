import React from 'react';
import './OptionTile.css';

const OptionTile = ({ optionNum, icon, labelLine1, labelLine2 }) => {
  return (
    <div className="option-tile">
      <div className="option-tile-header">
        <span>{optionNum}</span>
        <span className="option-tile-close-btn">×</span>
      </div>
      
      <div className="option-tile-body">
        <div className="option-tile-icon">{icon}</div>
        <span className="pixel-text option-tile-label">
          {labelLine1}<br />{labelLine2}
        </span>
      </div>

    </div>
  );
};

export default OptionTile;