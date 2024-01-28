import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../Pages/Home.css';
import Card from "../Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Abtcard from "../Card/abtCard";
import LatestNews from "../Card/LatestNews";
import Banner from '../Banner/Banner';

export default function Home() {
  return (
    <div className='homepage-container'>
      <Banner />
    <Box sx={{ flexGrow: 1 }} style={{padding: '40px', margin: '0px 100px 0px 100px'}}>
      <Grid container spacing={3} sx={{ marginTop: 4, marginBottom: 4, padding: 0}}>
        <Grid item xs={4} sx={{ padding: 0}} className='title'>
          <div>
            <h2 style={{textAlign: 'left', margin: 0, fontSize: '25px', color: '#0796d6', padding: 0}}>Leveraging over 50 years of expertise in Medical Scientific Research, Analyses &<br /> Development.</h2>
          </div>
        </Grid>
        <Grid div xs={8} sx={{marginBottom: 4}}>
          <div>
            <p style={{textAlign: 'left', fontSize: '16px'}}>We offer comprehensive solutions to support our clients, from the discovery of science to marketing communication while contributing to better patient outcomes to stay ahead of the dynamic healthcare landscape. Our expertise represents diverse fields, including life science, engineering, healthcare and medicine and representing across the globe.</p>
          </div>
        </Grid>
        <Grid div xs={12} sx={{ marginTop: 6 }}>
          <div>
            <h1 className='titleStyle' style={{textAlign: 'left', margin: 0, fontSize: '25px', color: '#3b6fb6', overflow: 'hidden'}}>WHAT WE DO</h1>
            <p style={{textAlign: 'left', paddingTop: '20px', fontSize: '16px', margin: 0}}>We offer an array of services, including scientific and medical writing, editing, peer-reviewing, and data collection and analysis services that cover academic, scientific, regulatory business, medical, and technology. We support in the development of the manuscripts and thesis, creating abstracts and posters, case reports, slide decks, and evidence-based response documents. We assist life science, pharmaceutical, medical device manufacturers, hospitals, healthcare providers, payers, technology companies, and research scholars in their quest for a credible scientific & evidence-based writing partner</p>
          </div>
        </Grid>
        <Box>
          <Grid container columnGap={6}> 
          <Grid item xs={3} sx={{ padding: 0, marginTop: 7}} className='service-container'>
            <div>

            </div>
          <div className='serviceCard'>
            <div className='wrapper'>
            <h2>Research<br /> Service <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faChevronRight} /></span></h2>
            <p>Systematic review, meta- analyses, clinical literature review, evidence based literature review, case study analysis, experimental methodology.</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={3} sx={{ padding: 0, marginTop: 7}} className='service-container-2'>
          <div className='serviceCard'>
            <div className='wrapper'>
            <h2>Publication<br /> Support <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faChevronRight} /></span></h2>
            <p>Systematic review, meta- analyses, clinical literature review, evidence based literature review, case study analysis, experimental methodology.</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={3} sx={{ padding: 0, marginTop: 7}} className='service-container-3'>
          <div className='serviceCard'>
            <div className='wrapper'>
            <h2>Data Analytics<br /> Machine Learning <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faChevronRight} /></span></h2>
            <p>Systematic review, meta- analyses, clinical literature review, evidence based literature review, case study analysis, experimental methodology.</p>
            </div>
          </div>
        </Grid>
          </Grid>
        </Box>

       
      </Grid>
    </Box>

    <div className='card-container'>
        <div className='card'>
            <h2>Global Leader in Research, Publishing and communication</h2>
            <p>At Pubrica, our medical writers and editors develop medical, scientific, technical, regulatory and marketing communication documents as per the client's requirements.</p>
            <a href='#' style={{fontSize: '21px', textDecoration: 'none', color: '#3b6fb6'}}>Find out why <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </div>
    </div>

    <div className='WorkFor'>
    <div className='card'>
            <h2 className='titleStyle' style={{textAlign: 'left', margin: 0, fontSize: '25px', color: '#3b6fb6', overflow: 'hidden'}}>WHO WE WORK FOR</h2>
            <Card />
        </div>
    </div>

    <div className='categories'>
      <div className='row'>
        <div className='col'>
          <div className='category'>
            <h4 style={{color: '#3b6fb6'}}>Pathology<span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h4>
          </div>
        </div>

        <div className='col'>
          <div className='category'>
            <h4 style={{color: '#3b6fb6'}}>Pathology<span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h4>
          </div>
        </div>

        <div className='col'>
          <div className='category'>
            <h4 style={{color: '#3b6fb6'}}>Pathology<span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h4>
          </div>
        </div>

        <div className='col'>
          <div className='category'>
            <h4 style={{color: '#3b6fb6'}}>Pathology<span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h4>
          </div>
        </div>

        <div className='col'>
          <div className='category'>
            <h4 style={{color: '#3b6fb6'}}>Pathology<span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h4>
          </div>
        </div>
      </div>
    </div>

    <div className='advantage-container'>
        <div className='content'>
            <h2 className='titleStyle' style={{textAlign: 'left', margin: 0, fontSize: '25px', color: '#3b6fb6', overflow: 'hidden'}}>THE ADVANTAGES OF WORKING WITH US…</h2>
            <p>Pubrica works with you to create successful scientific and medical documents with our best minds and passion.</p>
        </div>
    </div>

    <div className='about-container'>
      <Abtcard />
    </div>

    <div className='latest-news'>
      <h2 style={{textAlign: 'left', margin: 0, fontSize: '25px', color: '#3b6fb6'}}>Latest News <span style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span></h2>
      <p>Explore our latest news, tips, advice and fresh perspectives publishing guidelines, procedures, roadmaps, etc.</p>
      <LatestNews />
    </div>
    </div>
  );
}
