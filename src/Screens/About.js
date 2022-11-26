import * as React from "react";
import {Container, Image, Row,Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import samir from '../Image/samir.jfif'

class About extends React.Component {
    render() {
        return (

            <div id="about_me" className="pad blocs about_me">
                <Container >
                    <Row className="title">
                        <Col> <h3>ABOUT ME</h3></Col>
                    </Row>
                    <Row className="aboutus_content">
                        <Col lg={6} md={6}><Image src={samir} width="70%" />
                        </Col>
                        <Col lg={6} md={6} style={{textAlign:'left'}}>
                            
                            <h3>Je suis <span className="name">Samir SENNOUNI</span></h3>
                            <ul className="aboutme">
                                <li><span className="text_01">Nom</span><span>:SENNOUNI</span></li>
                                <li><span className="text_01">Prénom</span><span>:Samir</span></li>
                                <li><span className="text_01">Age</span><span>:21 ans</span></li>
                                <li><span className="text_01">Nationalité</span><span>:Marocain</span></li>
                                <li><span className="text_01">Langage</span><span>:Arabe, Français, Anglais, Allemagne</span></li>
                                <li><span className="text_01">Address</span><span>:----</span></li>
                            </ul>
                            <a href="https://drive.google.com/file/d/1yylhHhtqXkylOyUi14p0hIFQCEbH6uAJ/view?usp=sharing"><Button  size="lg" className="resume">
                                 CV
                            </Button></a>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default About;
