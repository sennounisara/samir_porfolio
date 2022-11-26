import * as React from "react";
import profil from '../Image/profil.jfif'
import { TypeAnimation } from "react-type-animation";
import {Col, Container, Row} from "react-bootstrap";
import './style.css'

class Profile extends React.Component {
    render() {
        return (
            <div id="profile" className="pad profile">
                <Container>
                    <Row xs={1} md={2}>
                        <Col lg={12}>
                            <div className="imageProfil">
                            <img  alt="software engineer" src={profil} width="16%"/>
                            </div>
                        
                            <h3>Je suis
                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                ' Samir SENNOUNI',
                                1500,
                                ' Ingénieur en éléctrique',
                                1500,
                                ]}
                                speed={40} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ color: '#007bff' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                            </h3>
                            <p>Compétences principales en électrotechnique, électronique et
                                informatique industriel, sans oublier la capacité d’adaptation
                                au groupe. Traiter les tâches avec précision et efficacité.
                                Passionné et motivé.
                            </p>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Profile;
