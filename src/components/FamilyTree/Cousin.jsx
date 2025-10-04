import React from 'react';
import Special from './Special';

const Cousin = ({name}) => {
    return (
        <div>
            {name}
            {
                name === 'JoJo' && <Special></Special>
            }
        </div>
    );
};

export default Cousin;