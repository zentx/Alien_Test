
import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Div } from './Sidebar.styled';

class Sidebar extends Component {   

    render(){

        const icon = <div className="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>;
    
    return (
        
    <Div active={ this.props.check }>
        <Menu onStateChange={  this.props.open } customBurgerIcon={ icon } width={'400px'} 
              customCrossIcon={ false } noOverlay right {...this.props}>
        </Menu>
    </Div>    
    )
  }
}

export default Sidebar;