
import React, { Component } from "react";
import { StyledTransparentDiv } from "./VideoPlayer.styled";
import { Spring } from 'react-spring/renderprops';
import { StyledVideoPlayer } from './VideoPlayer.styled'

class VideoPlayer extends Component {

    render(){
        return(
            <Spring from={{ opacity:0 }}
        to={{ opacity: 1 }}>
            {props => (
            <div style={props}>
                <StyledTransparentDiv>
                    <StyledVideoPlayer> </StyledVideoPlayer>
                </StyledTransparentDiv>
            </div>
            
            )}
        </Spring>

            
        );
    }

}

export default VideoPlayer;