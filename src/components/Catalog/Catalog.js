import React, { Component } from "react";
import { StyledCatalog } from "./Catalog.styled";
import { Spring } from 'react-spring/renderprops';
import weyland_logo from './../../assets/img/Group 419.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import weapon_img from './../../assets/img/1@2x.png';
import { StyledCaseless } from "./Catalog.styled";

class Catalog extends Component {
    render(){
        return(
            <Spring config={{duration: 500}} from={{ opacity: 0 }} to={{opacity: 1 }}> 
                {props => (
                    <div style={props}>
                        <StyledCatalog>
                            <img className="weyland-logo" src={ weyland_logo } alt="weyland icon" />
                            <div className="link-group">
                                <div className="home"><a href="/">HOME</a></div> 
                                <div className="catalog"><a><b>WEAPON CATALOG</b></a> </div>
                            </div>
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
                            <div className="next-weapon">
                                <FontAwesomeIcon className="arrow" icon={ faAngleDown } />
                            </div>
                        </StyledCatalog>

                        <Spring config={{duration: 500}} from={{ top: 626}} to={{ top:  0}}>
                                {props => (
                                        <StyledCaseless style={props}>
                                            <Spring config={{delay: 1000}} from={{ width: 683, left: 341.5, top: 243, height: 186}} to={{ width:  1366, left: 0, top: 0, height: 386}}>
                                                {props => (  
                                                    <img className="first-weapon" style={props} src={ weapon_img } /> 

                                                )} 
                                            </Spring>
                                            
                                        </StyledCaseless>
                                )}
                        </Spring>

                    </div>
                )}
            </Spring>
            
        )
    }
}

export default Catalog;