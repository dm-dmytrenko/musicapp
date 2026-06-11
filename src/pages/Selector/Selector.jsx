import React from 'react';
import OptionTile from '../../components/OptionTile/OptionTile';

const Selector = () => {
  return (
    <div className="selector-page">
        <OptionTile 
            optionNum="Opt_1" 
            icon="✒️" 
            labelLine1="CREATE" 
            labelLine2="TRACK NAME" 
        />

        <OptionTile 
            optionNum="Opt_2" 
            icon="🎨" 
            labelLine1="CREATE" 
            labelLine2="ALBUM PICTURE" 
        />

        <OptionTile 
            optionNum="Opt_3" 
            icon="🎧" 
            labelLine1="DEFINE" 
            labelLine2="GENRE" 
        />
    </div>
  );
};

export default Selector;
