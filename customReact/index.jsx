import React, { Children } from 'react';
import ReactDom from 'react-dom/client';

import App from './App';
const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#Custom')

customRender(reactElement,mainContainer)  
