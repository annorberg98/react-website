import React from 'react';

function ContactIcon(props){
    return (
        <div className="col-lg-3 col-sm-12">
            <h5>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="contact-icons">
                    <i className={props.icon}></i>
                </a>
                </h5>
            <p><a href={props.link}>{props.content}</a></p>
        </div>
    );
} export default ContactIcon;