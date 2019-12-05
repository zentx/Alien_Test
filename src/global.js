import { createGlobalStyle } from 'styled-components'
import img from './assets/img/ALIEN_Work_1920_Arrival@2x.png'

export const GlobalStyles = createGlobalStyle`
    html, body{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background-image: url(${img});
        background-position: center center;
		background-repeat:  no-repeat;
		background-attachment: fixed;
		background-size:  cover;
		background-color: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }
    img {
        border-radius: 5px;
        height: auto;
        width: 10rem;
    }
    div {
        text-align: center;
    }
    small {
        display: block;
    }
    a {
        color: ${({ theme }) => theme.primaryHover};
        text-decoration: none;
    }
    `

