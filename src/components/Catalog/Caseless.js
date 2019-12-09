import React, { Component } from "react";
import { StyledCaseless } from "./Catalog.styled";
import { Spring } from 'react-spring/renderprops';
import weapon_img from './../../assets/img/1@2x.png';

class Caseless extends Component {
    render() {
        return(
            <Spring from={{ marginTop: 626}} to={{ marginTop:  0}}>
                {props => (
                    <div style={props}>
                        <StyledCaseless>
                            <img className="first-weapon" src={ weapon_img } />
                        </StyledCaseless>
                    </div>
                )}
            </Spring>
            
        )
    }
}

export default Caseless;