import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const submitForm = {name, email}
        console.log(submitForm);
    }

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='John Doe' id="" /> <br /> <br />
                <input type="email" name="email" placeholder='example@gmail.com' id="" /> <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;