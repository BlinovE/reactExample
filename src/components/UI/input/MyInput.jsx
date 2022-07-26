import React from 'react';
import inp_class from './MyInput.module.css';

// создание неуправляемого компонента
const MyInput = React.forwardRef( function(props, ref){
    return(
        <input ref={ref} className={inp_class.myInp}/>
    );
});

export default MyInput;