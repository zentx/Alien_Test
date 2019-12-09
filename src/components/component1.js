import React from 'react';
import { Spring } from 'react-spring/renderprops'
import { Z_FIXED } from 'zlib';


export default function Component1(){
    return (
        <Spring from={{ opacity:0, marginTop: 900 }}
        to={{ opacity: 1, marginTop: 420 }}>
            {props => (
                <div style={props}>
                    <div style={c1style}>
                        <h1>Hi there</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam, nulla nostrum, officia soluta inventore repellendus, eaque nihil sed voluptas ea? Deserunt iure, suscipit exercitationem earum aliquam iusto nihil nulla!
                           Veniam perspiciatis enim accusamus, autem numquam qui inventore non labore totam id quaerat dolores quos suscipit reprehenderit harum excepturi esse? Laborum nisi commodi enim, adipisci provident rem nobis similique distinctio?
                           Possimus cum iusto ducimus saepe laborum. Accusantium sint, dolorem, aliquam in voluptate id, quos temporibus ullam cupiditate itaque consequuntur qui cum! Exercitationem a, quisquam obcaecati commodi nisi quis consectetur iure!</p>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const c1style = {
    position: 'fixed',
    width: '1366px',
    height: '241px',
    background: '#000000',
    color: '#FFFFFF',
    padding: '1.5rem'
  }
