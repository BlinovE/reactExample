import React from 'react';
import btn_class from './MyButton.module.css';

const MyButton=({children,...props})=>{
    return(
        <button {...props} className={btn_class.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;