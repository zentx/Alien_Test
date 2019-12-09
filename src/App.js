
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { GlobalStyles } from './global';
import { default_theme } from './theme';
import { Background, Sidebar, Bottom, Video, Catalog } from './components';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      showBottom: false,
      playVideo: false,
      changeMenu: false,
      fadeMenu: false,
      active: false,
     }
     this.showBottom = this.showBottom.bind(this);
     this.playVideo = this.playVideo.bind(this);
     this.changeMenu = this.changeMenu.bind(this);
     this.menuOpen = this.menuOpen.bind(this);
  }

  showBottom(){
    const currentState = this.state.showBottom;
    this.setState({ showBottom: !currentState });
  }

  playVideo(){
    const currentState = this.state.playVideo;
    this.setState({ playVideo: !currentState });
  }

  changeMenu(){
    const currentState = this.state.changeMenu;
    this.setState({ fadeMenu: !currentState });
    setTimeout(function() {
      this.setState({changeMenu: !currentState})
    }.bind(this), 500)
  }

  menuOpen(state){
    this.setState({ active: state.isOpen });
  }

  render() {

    return (
      
      <ThemeProvider theme={default_theme}>
      <>
      <GlobalStyles />
      {!this.state.changeMenu && 
        <div id="App"> 
            <Spring from={{filter: 'blur(0px)', marginTop: this.state.showBottom ? 626 :0, opacity: 1 }} to={{filter: this.state.playVideo ? 'blur(30px)' : 'blur(0px)', marginTop: this.state.showBottom ? -200 : 0, opacity: this.state.fadeMenu ? 0 : 1 }}> 
              {props => (
              <div style={props}>
                <Sidebar check={ this.state.active } open={ (state) => this.menuOpen(state) } pageWrapId={"page-wrap"} outerContainerId={"App"}  />
                <div id="page-wrap">
                  <Background openMenu={ this.state.active } show={ this.showBottom } play={ this.playVideo } change={ this.changeMenu }/>
                </div>
              </div>
              )}
          </Spring>
          <div>
            {this.state.playVideo && <Video close={ this.playVideo } />}
            {this.state.showBottom && <Bottom />}
          </div>
        </div>
      }
      {this.state.changeMenu &&
        <div id="App">
            <Catalog /> 
        </div>
      }     
          
      </>
      </ThemeProvider>
    );
  }
}

export default App;
