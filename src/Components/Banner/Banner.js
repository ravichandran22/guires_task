import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../../Images/Industry.jpg";
import "../Banner/Banner.css";

function Banner() {
  return (
    <div>
        <div style={SliderContainer}>
            <Slider {...settings}>
                <div style={row}>
                    <div style={col}>
                        <div className='SliderContent'>
                            <h1>The standard Lorem Ipsum passage,<br /> used since the 1500s</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s</p>
                            <button style={btnStyle}>Editing & Translation</button><br />
                            <button style={btnStyle}>Publication Support</button>
                        </div>
                    </div>
                    <div style={col} className='sliderImg1'>
                        
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <div className='SliderContent'>
                            <h1>The standard Lorem Ipsum passage,<br /> used since the 1500s</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s</p>
                            <button style={btnStyle}>Editing & Translation</button><br />
                            <button style={btnStyle}>Publication Support</button>
                        </div>
                    </div>
                    <div style={col} className='sliderImg2'>
                        
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <div className='SliderContent'>
                            <h1>The standard Lorem Ipsum passage,<br /> used since the 1500s</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s</p>
                            <button style={btnStyle}>Editing & Translation</button><br />
                            <button style={btnStyle}>Publication Support</button>
                        </div>
                    </div>
                    <div style={col} className='sliderImg3'>
                        
                    </div>
                </div>
                <div style={row}>
                    <div style={col}>
                        <div className='SliderContent'>
                            <h1>The standard Lorem Ipsum passage,<br /> used since the 1500s</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s</p>
                            <button style={btnStyle}>Editing & Translation</button><br />
                            <button style={btnStyle}>Publication Support</button>
                        </div>
                    </div>
                    <div style={col} className='sliderImg4'>
                        
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Banner

const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const row = {
    width: '100%',
    display: 'flex'
  }
  const col = {
    width: '50%',
    float: 'left',
    backgroundColor: '#000',
    color: '#fff',
  }
  const SliderContainer = {
    textAlign: 'left',
  }
  const btnStyle ={
    backgroundColor: '#8C1E1F',
    padding: '12px 18px',
    color: '#fff',
    border: 'none',
    marginBottom: '10px',
    marginTop: '5px',
    width: '200px'
  }