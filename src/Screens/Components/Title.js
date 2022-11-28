import { Col, Row } from "react-bootstrap";
import Tween from 'rc-tween-one';
import * as React from "react";
import '../style.css';

export default function Title(props){
    return (
        <div style={{padding:'5vh'}}>
            <Row>
                <Col style={{display:'flex', flexDirection:'column',justifyContent:"center",alignItems:'center'}}> 
                <div style={{flex:1}}>
                <h3 >{props.title}</h3>
                <p className="Background-title">{props.title}</p>
                </div>
                    <div style={{flex:1, borderColor: 'rgba(216,223,229, 0.5)',borderRadius: '15px',borderStyle: 'solid',width:'108px',marginTop: '-2.5rem' }}>
                        <Tween
                            animation={{
                                opacity: 1,
                                x: '100px',
                                repeat: -1,
                                repeatDelay: 1000,
                                duration: 1000,
                            }}
                            style={{ opacity: 0 }}>
                            <div className="cercle"></div>
                        </Tween>
                    </div>
                </Col>
            </Row>
        </div>
    );
}