import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cardimg1 from "../../Images/Life-science-company.jpg";
import cardimg2 from "../../Images/pharmaceuticals.jpg";
import cardimg3 from "../../Images/Medical-device.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
  return (
    <div style={cardContainer} className='cardContainer'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} style={{padding: '50px 100px'}}>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', marginTop: '40px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', marginTop: '40px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399, padding: '20px', marginTop: '40px', borderBottom: '8px solid #18974c' }}>
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>Over 500+ academic editors, medical writers, and industry veterans across the globe have been onboarded based on the custom needs of our clients. We can also accommodate ad hoc requests and fluctuations..</Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}

const CardTitle = {
    padding: '1rem',
    margin: 0,
    textAlign: 'left',
    color: '#000',
}

const ContentStyle = {
    padding: '28px 18px 28px 24px',
    margin: 0,
    color: '#000',
    fontSize: '19px',
    textAlign: 'left',
    height: '140px'
}

const cardContainer = {
    marginTop: '50px',
    marginBottom: '50px',
}
