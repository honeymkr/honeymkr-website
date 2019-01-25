import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

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
import lg_ponder from '../images/lg_ponder.jpg'
import lg_kids from '../images/lg_kids.png'
import lg_rockers from '../images/lg_rockers.jpg'


class Main extends React.Component {

  render(  ) {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" 
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="hacker" className={`${this.props.article === 'hacker' ? 'active' : ''} 
          ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          
          <h2 className="major">Hackerdot.com</h2>
          <p>Crypto-Vaperwave inspired microsite using Createjs.
          </p>

          <span className="image main"> 
          <h3>HTML5 Website</h3>
          <a href="http://hackerdot.com" rel="noopener noreferrer"  target="_blank" >  <img src={hacker} alt="hacker-homescreen" /> </a> 
          </span>
          <hr/>  
          
          <h2 className="major" > Rich Interactive Banners</h2>

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
          <p>A love for motion design has been a driving factor for me as a digital expressionist.
            Here's some recent work that expands on concepts like write-on lettering
            and creative direction for self-promotion.
          </p>
          <hr/>

          <span className="image main"> 
          <h2>Fungi Static Water Baby </h2>
          <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/7mMZBo8x8WkKk2KIuk4GSW/d5cc36e7a3026a262b798ecc9b69002d/WaterBaby-700.mp4' 
              width="560" height="560" controls />
          <h3>After Effects video for Instagram.</h3>
          </span>

          <span className="image main"> 
          <h2>Glitchy Squares</h2>
          <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/3Wd23e7hnY9EuiTEP35jxm/003f3f3c1c34c400bb5dac6a192b5549/honeymkr__6_1.mp4' 
              width="560" height="560" controls />
         <h3>After Effects video for Instagram.</h3>
          </span>

          <span className="image main"> 
          <h2>Cassandre typeface</h2>
          <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/5912nOamCRvMtyuWeBnS63/eb89deef4bfaf3d1cc073b65f368e800/HONEYMKR_CASSANDRE_FINAL.mp4' 
              width="560" height="560" controls />
          <h3>After Effects video for Instagram.</h3>
          </span>

          <span className="image main"> 
          <h2>Polarized Vortex Effect</h2>
          <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/7CmHZFQLo4DFMkQyyzXV7T/34a98638346658980ac12186e3f9b90d/Final_polarized_4.mp4' 
              width="560" height="560" controls />
         <h3>After Effects video for Instagram.</h3>
          </span>

         

         
    

          {close}
        </article>

        <article id="past-work" className={`${this.props.article === 'past-work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        
        <h2 className="major">Past Work</h2>
          <p>I've been designing and developing creative website material for years typically on my own 
            as a freelancer at many of NYC's major advertising agencies: Rapid prototyping for client
            pitches, web banner campaigns, microsites, front end development. 
          <br/>
          Archived, (working) projects are available by request:</p>
          <hr/>
          
      
    
      <span className="image main"> 
      <h3>LG, 'Rockers': <br/>
      Banner prototype for client pitch.</h3>
      <img src={lg_rockers} alt="lg_rockers" />    
      <h4>MADE WITH: Flash, Actionscript 3</h4>
      </span>
     
   

      <span className="image main"> 
      <h3>LG, 'Give It A Ponder': <br/>Campaign microsite.</h3>
      <img src={lg_ponder} alt="lg_ponder" />
      <h4>MADE WITH: Flash, Actionscript 3.</h4>
      </span>

      <span className="image main"> 
      <h3>Colgate, 'Discover Brushing':<br/> Banner prototype.</h3>
      <img src={lg_kids} alt="kids" />
      <h4>MADE WITH: Flash, Actionscript 3.</h4>
      </span>


      <span className="image main"> 
      <h3>Grooveshark, 'Find Your Island': <br/>Banner for campaign.</h3>
      <img src={corona} alt="corona" />
      <h4>MADE WITH: Flash, Actionscript 3.</h4>
      </span>
      

      <span className="image main"> 
      <h3>Pepsi, 'Globe Logo': <br/>Animation for client pitch.</h3>
      <ReactPlayer url='https://videos.ctfassets.net/c0blkdc0ebdu/58PIUtw68SqyHSZusUtIUM/c041c1abe0c1be1f46fb901a9e66d680/pepsi-animation.mp4' 
              width="560" height="560" controls />
         
      <h4>MADE WITH: Adobe Illustrator, Adobe After Effects.</h4>
    </span>

    
            {close}
        </article>

      

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Contact</h2>
        <h4 className="major">Brooklyn based digital creative.</h4>
        <h3> Email: honeymkr.nyc (at) gmail</h3>
        <h3><a href="https://www.instagram.com/honeymkr/" target="_blank"  rel="noopener noreferrer" > instagram.com/honeymkr </a></h3>
        <h3><a href="https://github.com/honeymkr/" target="_blank"  rel="noopener noreferrer" > github.com/honeymkr </a></h3>
       
      
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


