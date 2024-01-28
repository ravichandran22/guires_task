import React from 'react';
import logo from '../../Images/logo.png';
import footerimg1 from '../../Images/LOGO.jpg';
import footerimg2 from '../../Images/LOGO-COPE-new.jpg'; 
import footerimg3 from '../../Images/trusted-site.png';
import footerimg4 from '../../Images/siteseal_gd_3_h_d_m.gif';
import footerimg5 from '../../Images/mcfee.jpg';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPlay, faCaretRight } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
        <div className='footer-container'>
            <div className='row'>
                <div className='col col1'>
                    <img src={logo} width={171} height={61} className='footer-logo'/>
                    <h4>CONNECT WITH PUBRICA</h4>
                    <p>Pubrica offers high quality evidence-based global research, analyses, publication, and scientific communication support services to researchers and industries across the globe. Our growing team is comprised of researchers and industry professionals working together to resolve the most critical issues facing scientific publishing.</p>
                </div>
                <div className='col' style={{paddingLeft: '30px'}}>
                    <h3>Services</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Research Services</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Physician Writing</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Publication Support</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Scientific Communication</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Editing and Translation</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Data Analytics</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Education Content</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Medical Data Collection</li>
                    </ul>
                </div>
                <div className='col' style={{paddingLeft: '30px'}}>
                <h3>About us</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Research Services</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Physician Writing</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Publication Support</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Scientific Communication</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Editing and Translation</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Data Analytics</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Education Content</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Medical Data Collection</li>
                    </ul>
                </div>
                <div className='col' style={{paddingLeft: '30px'}}>
                <h3>More</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Research Services</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Physician Writing</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Publication Support</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Scientific Communication</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Editing and Translation</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Data Analytics</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Education Content</li>
                        <li><FontAwesomeIcon icon={faCaretRight} style={{paddingRight: '5px'}}/> Medical Data Collection</li>
                    </ul>
                </div>
                <div className='col col5'>
                    <img src={footerimg1} width={214} height={68}/>
                    <img src={footerimg2} />
                    <p>Committed to the COPE & ICMJE guidelines</p>
                </div>
            </div>

            <div className='footer-logos'>
                <img src={footerimg3} width={122} height={37}/>
                <img src={footerimg4} width={122} height={37}/>
                <img src={footerimg5} width={122} height={37}/>
            </div>
        </div>

        <div className='footer-copyrights'>
                <p>Copyright © 2024 - Pubrica is a trading name of Guires, a company registered in England, Wales and India.</p>
                <p style={{paddingTop: '5px'}}>Terms & Conditions | Privacy Policy</p>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faPlay} /></li>
                    <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li><FontAwesomeIcon icon={faPinterestP} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
    </div>
  )
}

export default Footer