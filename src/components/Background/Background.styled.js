import styled from 'styled-components';
import img from './../../assets/img/ALIEN_Work_1920_Arrival@2x.png';


export const StyledBackground = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    background-image: url(${img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    img.play-logo {
        position: fixed;
        top: 82px;
        left: 96px;
        width: 28px;
        height: 28px; 
    }

    div.show-video {
        cursor: pointer;
    }

    a {
        color: #FFFFFF; 
    }

    div.link-group {
        position: fixed;
        top: 334px;
        left: 79.8%;
        width: 200px;
        height: 45px;
        opacity: 0.7;
        letter-spacing: 0.1rem;
        font-size: 14px;
        text-align: right;
        z-index: 1;
    }

    div.link-group div {
        padding: 4px 0;
    }

    div.link-group div a {
        text-decoration: none;
    }
    
    div.description {
        position: fixed;
        top: 83%;
        left: 91px;
        width: 335px;
        height: 21px;
        text-align: left;
        color: #FFFFFF;
        font-size: 16px;
        letter-spacing: 1.02px;
        opacity: 0.8;
    }

    div.desc-text {
        position: fixed;
        top: 87.9%;
        left: 91px;
        width: 335px;
        height: 21px;
        font-size: 12px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.8;
    }

    small.first-text {
        position: fixed;
        letter-spacing: 3px;
        font-weight: bold;
        top: 82px;
        left: 135px;
        font-size: 8px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.8;
    }

    b.second-text {
        position: fixed;
        letter-spacing: 3px;
        font-weight: bold;
        top: 95px;
        left: 135px;
        font-size: 12px;
        text-align: left;
        color: #FFFFFF;
        opacity: 0.8;
    }

    img.weyland-logo {
        position: fixed;
        top: 85px;
        left: 43.70%;
        right: 4.32%;
        width: 12.52%;
        height: 59px;
    }

    div.social-net {
        position: fixed;
        top: 83.4%;
        left: 1222px;
        color:  #FFFFFF;
        font-size: 16px;
        tex-align: right;
    }

    .fontMargin {
        margin-right: 30px;
    }

    .info-box {
        border-left: 1.5px solid rgba(255, 255, 255, .5);
        opacity: 1;
        position: fixed;
        top: 71px;
        left: 80px;
        width: 358px;
        bottom: 20px;
    }

    div.more-info {
        tex-align: right;
        position: fixed;
        top: 91.37%;
        left: 1190px;
        color:  #FFFFFF;
        font-size: 12px;
        letter-spacing: 1px;
        opacity: 0.8;
        cursor: pointer;
    }

    b.info-text {   
        margin-left: 10px;
    }

    @media only screen and (max-width: 1322px) {
        div.link-group {
            left: 29.8%;
        }
    }

    @media only screen and (max-width: 700px) {
        img {
            right: 1.32%;
            width: 87.75px;
        }

        

      }

      @media only screen and (max-width: 600px) {
        img {
            left: 42.70%;
            right: 1.32%;
            width: 87.75px;
        }
      }

      @media only screen and (max-width: 500px) {
        img {
            left: 41.70%;
            right: 1.32%;
            width: 80.75px;
        }
      }

      @media only screen and (max-width: 400px) {
        img {
            left: 40.70%;
            right: 1.32%;
            width: 76px;
        }
      }

      @media only screen and (max-width: 370px) {
        img {
            left: 39.70%;
            right: 1.32%;
            width: 73px;
        }
      }

`;