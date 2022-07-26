import React from 'react';
import btn_class from './MyButton.module.css';

const MyButton=(props)=>{
    return(
        <button className={btn_class.myBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;