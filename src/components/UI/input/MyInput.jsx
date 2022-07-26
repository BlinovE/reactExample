import React from 'react';
import inp_class from './MyInput.module.css';

const MyInput = function({children, ...props}){
    return(
        <input {...props} className={inp_class.myInp}/>
    );
};

export default MyInput;