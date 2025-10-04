import React from 'react';
import useInputFeild from '../../hooks/useInputFeild';

const HookForm = () => {

    const [name, nameOnChange] = useInputFeild('')
    const [email, emailOnChange] = useInputFeild('')
    const [password, passwordOnChange] = useInputFeild('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name, email, password);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} id="" /> <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} id="" /> <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;