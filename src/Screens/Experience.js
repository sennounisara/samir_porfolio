import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Title from './Components/Title'
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <div id="experience" className="pad ">
            <style>
                {`
                   .languer{
                   height: 100px;
                   }
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                        `}
            </style>
            <Container >
            <Title title="EXPÉRIENCES"/>
                <Row>
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                    Juil. Aout 2021<br/>
                    (Boujdour, Maroc)
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper} >
                        <Typography variant="h6" component="h1">
                            ONEE-Branche eau Boujdour
                        </Typography>
                        <Typography>
                        <span>Stage d’observation</span><br/>
                            Etude et analyse des circuits électrique et
                            pneumatique de l’installation de la station.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                    Avril - Jun 2020<br/>
(Boujdour, Maroc)
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        École Supérieure de Technologie Fès
                        </Typography>
                        <Typography>
                            Conception et réalisation d’un désinfecteur UV intelligent
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" >
                    Juillet- Aout 2019<br/>
(Boujdour, Maroc)
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className="languer" />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper style={{backgroundColor:"#F8F9FA"}} elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        ONEE-Branche eau Boujdour
                        </Typography>
                        <Typography>Stage d’observation</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
                </Row></Container>
</div>
    );
}
