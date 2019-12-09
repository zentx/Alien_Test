
import React, { Component } from "react";
import { StyledTransparentDiv } from "./VideoPlayer.styled";
import { Spring } from 'react-spring/renderprops';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledVideoPlayer } from './VideoPlayer.styled'

class VideoPlayer extends Component {

    render(){

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1
            }
        };

        return(
            <Spring from={{ opacity:0 }}
        to={{ opacity: 1 }}>
            {props => (
            <div style={props}>
                <StyledTransparentDiv>
                    <div onClick={ this.props.close } className="close">
                        <FontAwesomeIcon icon={ faTimes } />
                    </div>
                    <StyledVideoPlayer> 
                        <div className="video">
                            <YouTube videoId="kU264oRLRcU" opts={opts} />
                        </div>
                    </StyledVideoPlayer>
                </StyledTransparentDiv>
            </div>
            
            )}
        </Spring>

            
        );
    }

}

export default VideoPlayer;