import React from 'react';
import './main.css';

export default function Main(props){
    return(
        <div id="__main-wrapper">
            {props.children}
        </div>
    );
};
