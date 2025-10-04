import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h4>Special{name}</h4>
            <strong>Asset: {asset}</strong>
            <p><strong>newAsset: {newAsset}</strong></p>
        </div>
    );
};

export default Special;