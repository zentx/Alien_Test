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

    /* Position and sizing of burger button */
    .bm-burger-button {
        /* El icono se queda en la misma posicion siempre */
        position: fixed;
        width: 31px;
        height: 21px;
        right: ${prop => prop.active ? '481px' : '81px'};
        top: 70px;
        transition: 0.5s;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #FFFFFF;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: #FFFFFF;
    }


    /* General sidebar styles */
    .bm-menu {
        background: #023139;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
        transition: 0.4s;
    }

    .bm-menu-wrap {
        z-index: 0!important;
      }

    `

