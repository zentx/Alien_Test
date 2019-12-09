import styled from 'styled-components';
import img from './../../assets/img/alien-screenshot.png';

export const StyledCatalog = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    background-image: url(${img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    a {
        color: #FFFFFF; 
    }

    img.weyland-logo {
        position: fixed;
        top: 50px;
        left: 88.29%;
        right: 4.32%;
        width: 6.71%;
        height: 11.98%;
        z-index: 2;
    }

    div.link-group {
        position: fixed;
        top: 210px;
        left: 116px;
        width: 132px;
        height: 188px;
        opacity: 0.7;
        letter-spacing: 0.1rem;
        font-size: 10px;
        text-align: right;
        border-right: 1.5px solid rgba(255, 255, 255);
        z-index: 2;
    }

    div.link-group div {
        margin: auto;
        padding: 4px 0;
    }

    div.link-group div a {
        text-decoration: none;
    }

    div.link-group div.home {
        position: absolute;
        top: 85px;
        right: 30px;
        width: 132px;
    }

    div.link-group div.catalog {
        position: absolute;
        top: 105px;
        right: 30px;
        width: 132px;
    }

    div.desc-box {
        position: fixed;
        padding: 2px 0;
        top: 208px;
        left: 337px;
        width: 739px;
        height: 1392px;
        opacity: 0.8;

    }

    div.desc-box div.title {
        font-family: 'Montserrat', sans-serif;
        position: fixed;
        top: 208px;
        left: 339px;
        width: 704px;
        height: 70px;
        text-align: left;
        letter-spacing: 0.70px;
        font-size: 20px;
        color: #FFFFFF;
    }

    div.desc-box div.description {
        position: fixed;
        top: 267px;
        left: 338px;
        width: 738px;
        height: 94px;
        text-align: left;
        letter-spacing: 1px;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 1.6;
        padding: 30px 0;
        
    }

    div.next-weapon {
        tex-align: right;
        position: fixed;
        top: 512px;
        left: 683px;
        color:  #FFFFFF;
        font-size: 60px;
        letter-spacing: 1px;
        opacity: 0.8;
        cursor: pointer;
    }

`

export const StyledCaseless = styled.div`
    position: fixed;
    top: 626px;
    background-color: #000000;
    height: 100vh;
    width: 100%;
    color: #FFFFFF;

    img.first-weapon {
        position: absolute;
        top: 243px;
        left: 341.5px;
        height: 186px;
        width:  683px;
    }

    img.weapon {
        height: 186px;
        width:  683px;
    }

    div.description {
        position: fixed;
        top: 410px;
        left: 350px;
        height: 148px;
        width: 592px;
        text-align: left;
        letter-spacing: 0.34px;
        

    }

    div.weapon-title {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0.42px;
        color: #FFFFFF;
    }

    div.weapon-desc {
        text-align: left;
        letter-spacing: 0.34px;
        color: #E9E9E9;
        opacity: 0.8;
    }

    @media only screen and (max-width: 800px) {
        img.weyland-logo {
            width: 6.71%;

        }
    }

`