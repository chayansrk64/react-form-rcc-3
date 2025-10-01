import React, { useState } from 'react';

const useInputFeild = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = e => {
          setFieldValue(e.target.value)
    }

    return [fieldValue, handleFieldOnChange]
};

export default useInputFeild;