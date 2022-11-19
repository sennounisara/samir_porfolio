import * as React from "react";
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import web from '../Image/web_development.svg';
import mobile from '../Image/mobile_development.svg';
import db from '../Image/server.svg';
import prog from '../Image/proud_coder.svg';
import design from '../Image/design.svg';
import erp from "../Image/ERP.svg";

class Skills extends React.Component {
    render() {
        return (

            <div id="skills" className="skills pad blocs education">
                <Container >
                    <Row>
                        <Col> <h3>COMPETENCES</h3></Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6}><Image src={web} class />
                            <h6>LOGICIELS</h6>
                            <p>Proteus, PSIM, Multisim, Matlbas, LabVIEW, Ecodial, CATIA V5, CATIA V5</p>
                        </Col>
                        <Col lg={4} md={6}>
                            <Image src={mobile}/>
                            <h6>PROGRAMMATION</h6>
                            <p>Prog graphique, C, java, SQL, Assembleur</p>
                        </Col>
                        <Col lg={4} md={6}>
                            <Image src={db}/>
                            <h6>AUTRE</h6>
                            <p>Electrotechnique, Electronique,Informatique industriel, Hydraulique, Thermique</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default Skills;
