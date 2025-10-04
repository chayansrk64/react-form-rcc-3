import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Syster from './Syster';

const Dad = ({asset}) => {
    return (
        <div>
            Dad
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Syster></Syster>
            </section>
        </div>
    );
};

export default Dad;