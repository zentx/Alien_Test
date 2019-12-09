import styled from 'styled-components';

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0px;
    width: 1366px;
    height: 100px;
    background: #000000;
    color: #FFFFFF;
    padding: 1.5rem;

    div.option-box {
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        top: 5px;
        left: 321px;
        width: 724px;
        height: 108px;
        text-align: center;
        font-size: 11px;
        opacity: 0.8;
    }

    div.option-box b {
        padding-right: 40px;
    }

    div.option-box div.copyright {
        position: absolute;
        top: 47px;
        width: 724px;
        height: 61px;
        letter-spacing: 0.66px;
    }

`;