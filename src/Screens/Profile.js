import * as React from "react";
import software from '../Image/software_engineer.svg'
import {Button, Col, Container, Row} from "react-bootstrap";
import './style.css'

class Profile extends React.Component {
    render() {
        return (
            <div id="profile" className="pad profile">
                <style>
                    {`
                   .b{
                   margin: 10vw;
                   }
                        `}
                </style>
                <Container>
                    <Row xs={1} md={2}>
                        <Col lg={8}>
                            <h3>SAMIR SENNOUNI</h3>
                            <p>Compétences principales en électrotechnique, électronique et
                                informatique industriel, sans oublier la capacité d’adaptation
                                au groupe. Traiter les tâches avec précision et efficacité.
                                Passionné et motivé.
                            </p>
                            <a href="https://drive.google.com/file/d/1yylhHhtqXkylOyUi14p0hIFQCEbH6uAJ/view?usp=sharing"><Button  size="lg" className="resume">
                                VOIR MON CV
                            </Button></a>
                        </Col>
                        <Col lg={4}><img alt="software engineer" src={software} width="100%"/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Profile;
