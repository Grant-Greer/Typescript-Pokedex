import {createGlobalStyle} from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
        font-size: 62.5%;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    body{
        position: relative;
        width: 151.2rem;
        height: 9.82rem;
        background: #fefefe;
    }`;

export default GlobalStyle;
