
import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Div } from './Sidebar.styled';

class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
          active: false
        } 
        this.handleBar = this.handleBar.bind(this) 
    }

    handleBar(state) {
        this.setState({ active: state.isOpen })
    }    

    render(){

        const icon = <div className="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>;
    
    return (
        
    <Div active={ this.state.active }>
        <Menu onStateChange={ this.handleBar } customBurgerIcon={ icon } width={'400px'} 
              customCrossIcon={ false } noOverlay right {...this.props}>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/">
                Burgers
            </a>

            <a className="menu-item" href="/">
                Pizzas
            </a>

            <a className="menu-item" href="/">
                Desserts
            </a>
        </Menu>
    </Div>    
    )
  }
}

export default Sidebar;