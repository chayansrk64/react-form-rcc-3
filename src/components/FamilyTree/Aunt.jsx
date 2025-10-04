import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            Aunt
            <section className='flex'>
                <Cousin name="JoJo" asset={asset}></Cousin>
                <Cousin name="PoGo"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;