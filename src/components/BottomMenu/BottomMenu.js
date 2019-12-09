
import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { BottomMenu } from './BottomMenu.styled';


export default function Bottom(){
    return (
        <Spring from={{ opacity:0}}
        to={{ opacity: 1 }}>
            {props => (
                <div style={props}>
                    <BottomMenu>
                    </BottomMenu>
                </div>
            )}
        </Spring>
    )
}