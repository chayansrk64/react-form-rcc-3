import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            Myself
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;