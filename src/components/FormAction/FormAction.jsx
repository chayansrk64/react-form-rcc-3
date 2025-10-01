import React from 'react';

const FormAction = () => {

    const handleFromAction = (event) => {
        const name = event.get('name')
        const email = event.get('email')
        // console.log(name, email);
    }

    return (
        <div>
            <form action={handleFromAction}>
                <input type="text" name="name" id="" /> <br /> 
                <input type="email" name="email" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;