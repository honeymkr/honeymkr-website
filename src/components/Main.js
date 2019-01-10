import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import {graphql} from 'gatsby'


import hacker from '../images/hacker-screenshot.jpg'
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
      <div ref={this.props.setWrapperRef} id="main" 
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="hacker" className={`${this.props.article === 'hacker' ? 'active' : ''} 
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          
          <h2 className="major">Hackerdot.com</h2>

          <h3>HTML5 Website</h3>
          <p>Designed and developed on my own using Adobe Photoshop, Google Images, and Createjs. This is a micro-site slash giant interactive banner that I was inspired to make after my experience of hosting a crypto/blockchain meet-up in Boston this past year.
          </p>

          <span className="image main"> 
          <a href="http://hackerdot.com" rel="noopener noreferrer"  target="_blank" >  <img src={hacker} alt="hacker-homescreen" /> </a> 
          </span>

       
          
          <h3>Rich Interactive Banners</h3>
          <p>In the name of fun, discovery and challenge, I created a small banner campaign for the Hackerdot.com meet-up. I designed and developed these on my own using Createjs and Photoshop.</p>


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
         <a href="https://hackerdot.com/banners/hacker_90-900A/" target="_blank" rel="noopener noreferrer" title="900-90 banner"> 
         <img src={banner900a} alt="banner1" /> </a>
         </span>

         <span className="image left">
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


        <article id="motion" className={`${this.props.article === 'motion' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Motion Graphics</h2>
      
        <h3>WaterBaby FungiStatic 3000</h3>
          <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/7mMZBo8x8WkKk2KIuk4GSW/d5cc36e7a3026a262b798ecc9b69002d/WaterBaby-700.mp4' 
              width="560" height="560" controls />
      
        <h4>Static-fungi and underwater babies. Unique bumper for honeymkr's capabilities.</h4>
        <h3>Art Direction and Animation: Jason Faulkner</h3>
      
          {close}
        </article>

        <article id="past-work" className={`${this.props.article === 'past-work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Past Work</h2>
      
          <span className="image left">
      

         <img src={corona} alt="banner8" />
      
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

export const query = graphql`
query {
  allContentfulContentType {
    edges {
      node {
        id
        name
        description
      }
    }
  }  
}

`