import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        /* Quitar margen de las esquinas */
        margin: 0px;
        padding: 0px;
        min-height: 100%;
        background-color: #000000;
        overflow: hidden;
    }

    .bm-menu-wrap {
        z-index: 0!important;
      }

    `

