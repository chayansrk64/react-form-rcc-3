import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit =  event => {
        event.preventDefault()
        console.log('submitted');
    }

    const handleOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
        if(password.length < 6){
            setError('Password should be 6 character or more!')
        }else{
            setError('')
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="" required /> <br />
            <input type="password" name="password" id="" onChange={handleOnChange} defaultValue={password} required /> <br />
            <input type="submit" value="Submit" />
        </form>
        <small style={{color: 'red'}}>{error}</small>
        </>
    );
};

export default ControlledField;