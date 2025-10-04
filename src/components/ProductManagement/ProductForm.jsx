import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;


        if(name.length === 0){
            setError('Please provide a name')
            return;
        }else if(price <= 0){
            setError('Price can not be negative or 0')
            return;
        }else if(quantity <=0){
            setError('Quantity can not be negative or 0')
            return;
        }else{
            setError('')
        }
        
        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);

        handleAddProduct(newProduct)

    }

    return (
        <div>
            <h3>Product Form</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product Name' id="" /> <br />
                <input type="text" name="price" placeholder='Product price' id="" /> <br />
                <input type="text" name="quantity" placeholder='Product quantity' id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;