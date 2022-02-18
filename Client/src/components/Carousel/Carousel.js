import React from 'react'
import "./Carousel.css";

import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../images/Slide1.jpg'
import Slide2 from '../../images/Slide2.jpg'
import Slide3 from '../../images/Slide3.jpg'


const Slider = () => {
    return (
  <div className='slidercontainer'>
<Carousel className='slidersize'>
  <Carousel.Item interval= '1500' >
    <img
      className="d-block w-100"
      src= "https://cdn.wallpapersafari.com/24/7/s28Jtj.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval= '1500' className='slideinner'>
    <img
      className="d-block w-100"
      src= "https://th.bing.com/th/id/R.722e9074bf93a4b4f6de6dcfb182564e?rik=7JSD4PCkGvd%2b5w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f9pCIGdt.jpg&ehk=6gO%2f0YzR8OhEphOaXATJzFIlBifb2482n6mFGPgTSsM%3d&risl=&pid=ImgRaw&r=0"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item interval= '1500' className='slideinner'>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/R.26f33f723a9738b97c450dda774cc7b1?rik=xBc3dFCYZihsOA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2flQGF8gN.jpg&ehk=tb%2fDeVkfF39CjulXCflnyxm1A5AdjfPcAboVm3wxt%2b0%3d&risl=&pid=ImgRaw&r=0"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item interval= '1500' className='slideinner'>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/R.065a04d7b08cab76460a0c9670a3f5b0?rik=9jwQqPGec6tSHA&riu=http%3a%2f%2fwww.wallpaperstop.com%2fwallpapers%2fcar-wallpapers%2fferrari-wallpapers%2fblack-ferrari-background-1920x1080-1009072.jpg&ehk=XN0YyCb8iQ2g0bib7joskCbGVMR2jPa3xJ0QujQetUQ%3d&risl=&pid=ImgRaw&r=0"
      alt="Third slide"
    />

  </Carousel.Item>
  
</Carousel>
</div>
    )
}

export default Slider
