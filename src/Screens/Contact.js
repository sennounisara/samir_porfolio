import * as React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Title from './Components/Title'
import { motion } from "framer-motion/dist/framer-motion"
import './style.css';
function Contact (props) {
        return (
            <div className="blocs contact">
                <Container>
                <Title title="CONTACT US"/>
                    <Row>
                        <Col lg={6}>
                            <div className="contactDescription">
                                <h3>CONTACT INFORMATION</h3>
                                <p>DESCRIPTION</p>
                            </div>
                
                                <div  className='blockContact'>
                                    <div className='iconContact'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    </svg>
                                    </div>
                                    <div className='contentContact'>
                                    <h5 className='toolContact'>Contact on phone</h5>
                                    {
                                        <p className='linkContact'>--------</p>
                                    }
                                    </div>
                                </div>
                            
                                <div  className='blockContact'>
                                    <div className='iconContact'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                    </div>
                                    <div className='contentContact'>
                                    <h5 className='toolContact'>Contact on mail</h5>
                                    {
                                        <p className='linkContact'>--------</p>
                                    }
                                    </div>
                                </div>
                                <div  className='blockContact'>
                                    <div className='iconContact'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="11" r="3" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    </div>
                                    <div className='contentContact'>
                                    <h5 className='toolContact'>Contact address</h5>
                                    {
                                        <p className='linkContact'>--------</p>
                                    }
                                    </div>
                                </div>
                        </Col>
                        <Col lg={6}>
                        <div  className='blockContact' >
                            
                                <Form className="form">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text"  placeholder='ENTER YOUR NAME' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>EMAIL</Form.Label>
                                        <Form.Control type="email" placeholder="ENTER YOUR EMAIL" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>SUBJET</Form.Label>
                                        <Form.Control type="text" placeholder="ENTER YOUR SUBJECT" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>MESSAGE</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="ENTER YOUR MESSAGE"  />
                                    </Form.Group>
                                    <Button size="lg" >SEND MAIL</Button> 
                                </Form>
                        
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className="socialMediaBlock">
                    <motion.div className='socialMediaIcon' whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </motion.div>
                    <motion.div className='socialMediaIcon' whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </motion.div>
                    <motion.div className='socialMediaIcon' whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                    </motion.div>
                    <motion.div className='socialMediaIcon' whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </motion.div>
        
                </div>
                <div><span>© 2020 - All right reserved </span><a className="footer-link" href="#profile">SENNOUNI</a></div>
            </div>
     
        );
    
}
export default Contact;
