
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
                        <div className="option-box">
                            <b>LEGAL</b>
                            <b>CORPORATE</b>
                            <b>FOUNDATION</b>
                            <b>SPACE</b>
                            <b>JOBS</b>
                            <b>INTERNATIONAL</b>
                            <div className="copyright">
                                <a>Weyland Industries was a British industrial business that existed in 
                                   the twenty-first century. Along with the Japanese Yutani Corporation, 
                                   it was one of the antecedents to the Weyland-Yutani conglomerate. The 
                                   eponymous Charles Bishop Weyland was the chairman of Weyland Industries 
                                   during the early 21st Century.</a>
                            </div>
                        </div>
                    </BottomMenu>
                </div>
            )}
        </Spring>
    )
}