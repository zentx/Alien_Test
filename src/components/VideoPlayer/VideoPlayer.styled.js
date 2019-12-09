import styled from 'styled-components';

export const StyledTransparentDiv = styled.div`
    background-color: transparent;
    height: 100vh;
    width: 1366px;

    div.close {
        position: fixed;
        top: 155px;
        left: 1269px;
        width: 9px;
        height: 13.75px;
        color: #FFFFFF; 
        font-size: 20px;
        cursor: pointer;
        opacity: 0.8;
    }

`

export const StyledVideoPlayer = styled.div`
    position: fixed;
    background-color: #000000;
    top: 186px;
    left: 0px;
    width: 1366px;
    height: 390px;
    margin: auto;

    div.video {
        position: absolute;
        width: 640px;
        left: 30%;
        right: 50%;
    }

`