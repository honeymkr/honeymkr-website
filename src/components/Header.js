import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo"> </div>
        <div className="content">
           
            <div className="inner">
                <h1>HONEYMKR</h1>
                <p>:: digital expressionism ::</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('motion')}}>MOTION DESIGN</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('hacker')}}>HACKERDOT.COM</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('past-work')}}>PAST WORK</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('about')}}>ABOUT</a></li>
            </ul>
        </nav>

    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
