import React from 'react'
import PropTypes from 'prop-types'


import hacker from '../images/hacker-screen.jpg'
import banner900a from '../images/hacker-900A.jpg'
import banner900b from "../images/hacker-900B.jpg"
import banner300a from '../images/hacker-300-250A.jpg'
import banner300b from '../images/hacker-300-250B.jpg'
import banner600a from '../images/hacker-300-600A.jpg'
import banner600b from '../images/hacker-300-600B.jpg'
import banner160a from '../images/hacker-160-600A.jpg'
import banner160b from '../images/hacker-160-600B.jpg'


import corona from '../images/corona.webp'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="hacker" className={`${this.props.article === 'hacker' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          
          <h2 className="major">Hackerdot.com</h2>

          <h3>HTML5 Website</h3>
          <p>Crypto-inspired Hackerdot.com is a blockchain club based out of Boston. I used <a href="https://createjs.com/" target="_blank" rel="noopener noreferrer">CreateJS </a> 
          to bring my Photoshop layouts to life.</p>

          <span className="image main"> 
          <a href="http://hackerdot.com" rel="noopener noreferrer"  target="_blank" >  <img src={hacker} alt="hacker-homescreen" /> </a> 
          </span>

       
          
          <h3>Rich Interactive Banners</h3>
          <p>Here are some banners I design and deveoloped using Adobe Photoshop + Createjs. The theme is Vaporwave and mis-information expressed visually.
          Click on any of the images to launch its corresponding banner in a new window:</p>

         <span className="image main">
         <a href="https://hackerdot.com/banners/hacker_90-900A/" target="_blank" rel="noopener noreferrer" title="900-90 banner"> 
         <img src={banner900a} alt="banner1" /> </a>
         </span>

         <span className="image main">
         <a href="https://hackerdot.com/banners/hacker_90-900B/" target="_blank"  rel="noopener noreferrer" title="900-90 banner">
         <img src={banner900b} alt="banner2" />
         </a>
         </span>

         <span className="image left">
         <a href="https://hackerdot.com/banners/hacker_300-600A/" target="_blank"  rel="noopener noreferrer" title="300-600 banner">
         <img src={banner600a} alt="banner3" />
         </a>
         </span>

         <span className="image left">
         <a href="https://hackerdot.com/banners/hacker_300-600B/" target="_blank" rel="noopener noreferrer" title="300-600 banner">
         <img src={banner600b} alt="banner4" />
         </a>
         </span>

          <span className="image left">
          <a href="https://hackerdot.com/banners/hacker_160-600A/" target="_blank" rel="noopener noreferrer" title="160-600 banner">
         <img src={banner160a} alt="banner5" />
         </a>
         </span>

          <span className="image left">
          <a href="https://hackerdot.com/banners/hacker_160-600B/" target="_blank" rel="noopener noreferrer" title="160-600 banner">
         <img src={banner160b} alt="banner6" />
         </a>
         </span>

          <span className="image left">
          <a href="https://hackerdot.com/banners/hacker_300-250A/" target="_blank" rel="noopener noreferrer" title="300-250 banner">
         <img src={banner300a} alt="banner7" />
         </a>
         </span>

          <span className="image left">
          <a href="https://hackerdot.com/banners/hacker_300-250B/" target="_blank" rel="noopener noreferrer" title="300-250 banner">
         <img src={banner300b} alt="banner8" />
        </a>
         </span>
         
        
        {close}
       
        </article>



        <article id="corona" className={`${this.props.article === 'corona' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Corona</h2>
          <h3>Rich Interactive Banner</h3>
          <p>Responsively designed ad banner for Corona to use in various advertising platforms.</p>

          <span className="image main">
          <a href="https://honeymkr.com/projects/corona/" target="_blank" rel="noopener noreferrer" title="Responsive Design + Flash">
          <img src={corona} alt="" /></a>
          </span>
      
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main