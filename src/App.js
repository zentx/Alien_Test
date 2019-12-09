
import React, { useState, Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring';
import { GlobalStyles } from './global';
import { default_theme, normal_bar } from './theme';
import { Background, Sidebar, Bottom, Video } from './components';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      isEmptyState: true,
      showBottom: false,
      playVideo: false
     }
     this.showBottom = this.showBottom.bind(this);
     this.playVideo = this.playVideo.bind(this);
  }

  showBottom(){
    const currentState = this.state.showBottom;
    this.setState({ showBottom: !currentState });
  }

  playVideo(){
    const currentState = this.state.playVideo;
    this.setState({ playVideo: !currentState });
  }

  render() {

    return (
      
      <ThemeProvider theme={normal_bar}>
      <>
      <GlobalStyles />
        <div id="App">
            <Spring from={{filter: 'blur(0px)', mmarginTop: this.state.showBottom ? 626 :0 }} to={{filter: this.state.playVideo ? 'blur(30px)' : 'blur(0px)', marginTop: this.state.showBottom ? -200 : 0}}> 
              {props => (
              <div style={props}>
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}  />
                <div id="page-wrap">
                  <Background show={ this.showBottom } play={ this.playVideo }/>
                </div>
              </div>
              )}
            </Spring>
          <div>
              {this.state.playVideo && <Video />}
              {this.state.showBottom && <Bottom />}
          </div>
        </div>
      </>
      </ThemeProvider>
    );
  }
}

export default App;
