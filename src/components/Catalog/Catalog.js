import React, { Component } from "react";
import { StyledCatalog } from "./Catalog.styled";
import { Spring } from 'react-spring/renderprops';
import weyland_logo from './../../assets/img/Group 419.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import weapon_img from './../../assets/img/1@2x.png';
import { StyledCaseless } from "./Catalog.styled";

class Catalog extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          nextWeapon: false,
         }
         this.nextWeapon = this.nextWeapon.bind(this);
      }

    nextWeapon(){
        const currentState = this.state.nextWeapon;
        this.setState({ nextWeapon: !currentState });
    }

    render(){
        return(
            <Spring config={{duration: 500}} from={{ opacity: 0 }} to={{opacity: 1 }}> 
                {props => (
                    <div style={props}>
                        <StyledCatalog>
                            <img className="weyland-logo" src={ weyland_logo } alt="weyland icon" />
                            <Spring config={{delay: 1000}} from={{ top: 210 }} to={{ top: this.state.nextWeapon ? 410 : 210 }}>
                            {props => (
                                <div style={ props } className="link-group">
                                    <div className="home"><a href="/">HOME</a></div> 
                                    <div className="catalog"><a><b>WEAPON CATALOG</b></a> </div>
                                </div>
                            )}   
                            </Spring> 
                            
                            <div className="desc-box">
                                <div className="title">
                                    <h1>New Arrivals</h1>    
                                </div>
                                <div className="description">
                                    <b>Mechanical engineering is one of the broadest engineering 
                                       disciplines. Mechanical engineers research, design, develop, 
                                       build, and test mechanical and thermal sensors and devices, 
                                       including tools, engines, and machines.</b>
                                </div>
                            </div>
                            <div onClick={ this.nextWeapon } className="next-weapon">
                                <FontAwesomeIcon className="arrow" icon={ faAngleDown } />
                            </div>
                        </StyledCatalog>

                       {this.state.nextWeapon && 
                       <Spring config={{duration: 500}} from={{ top: 626}} to={{ top:  0}}>
                                {props => (
                                        <StyledCaseless style={props}>
                                            <Spring config={{delay: 1000}} from={{ width: 683, left: 341.5, top: 243, height: 186}} to={{ width:  1366, left: 0, top: 0, height: 386}}>
                                                {props => (  
                                                    <img className="first-weapon" style={props} src={ weapon_img } /> 
                                                )} 
                                            </Spring>     
                                            <Spring config={{delay: 1000}} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                                                {props => (
                                                <div style={props} className="description">
                                                    <div className="weapon-title">
                                                        <h1>10×24mm Caseless</h1>
                                                    </div>
                                                    <div className="weapon-desc">
                                                        <b>The 10×24mm Caseless, designated the M309 in United States 
                                                        Colonial Marine Corps service, is an American-made caseless 
                                                        rifle cartridge notable for being the primary ammunition used 
                                                        by the M41A Pulse Rifle and its variants.</b>
                                                    </div> 
                                                </div>
                                                )}
                                            </Spring>
                                                    
                                        </StyledCaseless>
                                )}
                        </Spring> } 

                    </div>
                )}
            </Spring>
            
        )
    }
}

export default Catalog;