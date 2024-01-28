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
    <div style={cardContainer}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }}>
                        <CardMedia sx={{ height: 213 }} image={cardimg1} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Life Science companies <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Deep expertise in Experimental methodology
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }}>
                        <CardMedia sx={{ height: 213 }} image={cardimg2} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Pharmaceutical <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Communicate the value of your drug
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }}>
                        <CardMedia sx={{ height: 213 }} image={cardimg3} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Medical devices <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Develop exclusive marketing communication materials & PMS
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}

const CardTitle = {
    backgroundColor: '#1D4546',
    padding: '1rem',
    margin: 0,
    textAlign: 'left'
}

const ContentStyle = {
    backgroundColor: '#007b53',
    padding: '28px 18px 45px 24px',
    margin: 0,
    color: '#fff',
    fontSize: '19px',
    textAlign: 'left',
    height: '50px'
}

const cardContainer = {
    marginTop: '50px',
    marginBottom: '50px',
}
