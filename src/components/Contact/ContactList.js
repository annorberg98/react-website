import React from 'react';
import ContactIcon from './ContactIcon';

export default class ContactList extends React.Component {
    data = [
        {
            "content": "me@antonnorberg.se",
            "link": "mailto:me@antonnorberg.se",
            "icon": "fas fa-envelope"
        },
        {
            "content": "Anton Norberg",
            "link": "https://www.linkedin.com/in/anton-norberg/",
            "icon": "fab fa-linkedin-in"
        },
        {
            "content": "annorberg98",
            "link": "https://github.com/annorberg98/",
            "icon": "fab fa-github"
        },
        {
            "content": "Malmö, Sweden",
            "link": "https://goo.gl/maps/WLqvkF2FNBQJGq7b9",
            "icon": "fas fa-map-marked-alt"
        }
    ]
    constructor(props){
        super(props);
    }

    render(){
        let index = 0;
        return(
            <div className="row">
                {this.data.map(element =>
                    <ContactIcon link={element.link} content={element.content} icon={element.icon} key={index++} />
                    )}
            </div>
        );
    }
}