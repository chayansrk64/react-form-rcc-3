import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            Uncle
            <section className='flex'>
                <Cousin name="Lili" ></Cousin>
                <Cousin name="Jui"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;