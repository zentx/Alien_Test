import React, { Component } from "react";
import { StyledBackground } from "./Background.styled";
import weyland_logo from './../../assets/img/Group 419.svg';
import play_logo from './../../assets/img/play-button.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Spring } from 'react-spring/renderprops';

class Background extends Component {

  render(){

    return (
      
      <StyledBackground>
        <img className="weyland-logo" src={ weyland_logo } alt="weyland icon" />
        <div className="info-box">
            <div className="show-video" onClick={ this.props.play }>
              <img className="play-logo" src={ play_logo } />
              <small className="first-text">VER</small>
              <b className="second-text">TRAILER</b>
            </div>
            <div className="description">
              <b>BUILDING BETTER WORLDS</b>
            </div>
            <div className="desc-text">
               <small>Durante siglos, científicos de la corporación Weyland-Yutani han
                 monitorizado el comportamiento de una forma de vida alienígena tan poderosa que 
                 su potencial como recurso militar parece ser ilimitado.</small>
            </div>
        </div>
        
          <Spring from={{ left: '79.8%' }} to={{ left: this.props.openMenu ? '108%' : '79.8%' }}>
          {props => (
              <div style={props} className="link-group">
                <div><a><b>HOME</b></a></div> 
                <div onClick={ this.props.change }><a href="#"><b>WEAPON CATALOG</b></a> </div>
              </div>
           )} 
          </Spring>

        <div className="social-net">
            <FontAwesomeIcon className="fontMargin" icon={ faFacebookF } />
            <FontAwesomeIcon icon={ faInstagram } />
        </div>
        <div onClick={ this.props.show } className="more-info">
            <FontAwesomeIcon className="arrow" icon={ faAngleDown } />
            <b className="info-text">MORE INFO</b>
        </div>
        
      </StyledBackground>
    );
  }

}

export default Background;