import React from 'react';
import {Card} from 'react-bootstrap';
import Skill from './Skill';

export default class SkillList extends React.Component {
    tech = {
        'Web' : {
            'title': "Web Technologies",
            'color': 'success',
            'data' : [
                { 
                    'name': 'HTML5',
                    'value': 90
                },
                {
                    'name': 'CSS', 
                    'value': 75
                },
                { 
                    'name': 'Bootstrap',
                    'value': 80 
                },
                { 
                    'name': 'SASS',
                    'value': 50 
                    },
                {
                    'name': 'React',
                    'value' : 30 
                },
                {
                    'name': 'Angular',
                    'value': 10
                }
            ],
        },
        'Programming': {
            'title': 'Programming Languages',
            'color': 'danger',
            'data': [
                { 
                    'name': 'Python',
                    'value': 60,
                },
                { 
                    'name': 'PHP',
                    'value': 50,
                },
                { 
                    'name': 'C#',
                    'value': 50 
                },
                { 
                    'name': 'Javascript',
                    'value': 60 
                
                },
                {
                    'name': 'Java',
                    'value': 15
                },
            ]
        },
        "Misc": {
            'title': 'Miscellaneous',
            'color': 'primary',
            'data': [
                {
                    'name': 'Datastructures & Algorithms',
                    'value': 20
                },
                {
                    'name': 'Information Security',
                    'value': 50
                },
                {
                    'name': 'Information Architecture',
                    'value': 35
                },
                {
                    'name': 'Databases',
                    'value': 50
                },
                {
                    'name': 'Git',
                    'value': 55
                },
            ]
        }
    }
    constructor(props){
        super(props);
        this.state = {tech: this.tech[this.props.tech]}

        
    }

    render(){
        let index = 0;
        
        return(       
                <Card>
                    <Card.Body>
                        <h5 className="card-title">{this.state.tech.title}</h5>
                        {this.state.tech.data.map(element => 
                            <Skill title={element.name} value={element.value} color={this.state.tech.color} key={index++}/>
                            )}
                    </Card.Body>
                </Card>
        );
    }
} 