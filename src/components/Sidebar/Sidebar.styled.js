import styled from 'styled-components';

export const Div = styled.div`

.container {
    display: inline-block;
    cursor: pointer;
    
}

.bar1  {
    width: 30px;
    height: 3px;
    background-color: #FFFFFF;
    margin: 6px 0;
}
  
.bar2 {
    width: 18px;
    height: 3px;
    background-color: #FFFFFF;
    margin: 6px 0 0 12px;
}
  
.bar3 {
    width: 9px;
    height: 3px;
    background-color: #FFFFFF;
    margin: 6px 0 0 21px;
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
`;