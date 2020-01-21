import React from  'react';
import {ProgressBar} from 'react-bootstrap';

function Skill(props){
    
    return (
        <div className="skill">
            <p>
                <b>{props.title}</b>
            </p>
            <ProgressBar now={props.value} variant={props.color} />
        </div>
    );
} export default Skill;