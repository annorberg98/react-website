import React from 'react';
import NavBar from '../NavBar/Navbar';
import Homepage from '../Pages/Homepage';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Container fluid="true">
                <NavBar />           
                <Homepage />
            </Container>
        );
    }

} export default Main;