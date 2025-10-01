import React, { useRef } from 'react';

const UnControlledForm = () => {

    const passwordRef = useRef('')
    const emailRef = useRef('')

    const hanldeSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit={hanldeSubmit}>
                <input ref={emailRef} type="email" name="email" /> <br />
                <input ref={passwordRef} type="password" name="password" id="" /> <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default UnControlledForm;