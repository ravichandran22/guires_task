import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import covid from "../../Images/covid.jpg";
import medical from "../../Images/Medical-device.jpg";
import parkinson from "../../Images/Parkinson-blog.jpg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function MediaCard() {
  return (
    <div style={cardContainer}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }} style={{padding: '15px', height: '350px'}}>
                        <CardMedia sx={{ height: 122 }} image={covid} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Causes of Prolonged Use of Masks during Covid- 19 Pandemic
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Most of those polled had headaches, rash, acne, skin disintegration, and poor cognition after using N95 and surgical masks for an extended period during COVID-19. As the second wave of COVID-19 is likely..
                                </Typography>
                            </CardContent>
                            <CardActions style={{marginTop: '50px', padding: 0}}>
                                <Button style={btnStyle} size="small">Physician writing</Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }} style={{padding: '15px', height: '350px'}}>
                        <CardMedia sx={{ height: 122 }} image={medical} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Causes of Prolonged Use of Masks during Covid- 19 Pandemic
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Most of those polled had headaches, rash, acne, skin disintegration, and poor cognition after using N95 and surgical masks for an extended period during COVID-19. As the second wave of COVID-19 is likely..
                                </Typography>
                            </CardContent>
                            <CardActions style={{marginTop: '50px', padding: 0}}>
                                <Button style={btnStyle} size="small">Physician writing</Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={{ maxWidth: 399 }} style={{padding: '15px', height: '350px'}}>
                        <CardMedia sx={{ height: 122 }} image={parkinson} title="green iguana" />
                            <CardContent style={{padding: 0, color: "#fff"}}>
                                <Typography gutterBottom variant="h5" component="div" style={CardTitle}>
                                Causes of Prolonged Use of Masks during Covid- 19 Pandemic
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={ContentStyle}>
                                Most of those polled had headaches, rash, acne, skin disintegration, and poor cognition after using N95 and surgical masks for an extended period during COVID-19. As the second wave of COVID-19 is likely..
                                </Typography>
                            </CardContent>
                            <CardActions style={{marginTop: '50px', padding: 0}}>
                                <Button style={btnStyle} size="small">Physician writing</Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}

const CardTitle = {
    paddingTop: '15px',
    paddingBottom: '15px',
    margin: 0,
    textAlign: 'left',
    color: '#000',
    fontSize: '21px'
}

const ContentStyle = {
    margin: 0,
    color: '#000',
    fontSize: '14px',
    textAlign: 'left',
    height: '50px'
}

const cardContainer = {
    marginTop: '50px',
    marginBottom: '50px',
}

const btnStyle ={
    border: '1px solid #000',
    color: '#69b91e',
    borderRadius: '0px',
    fontSize: '10px'

}
