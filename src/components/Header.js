import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
           
            <div className="inner">
                <h1>HONEYMKR</h1>
                <p>::web development::animation::</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('hacker')}}>HACKER</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('corona')}}>CORONA</a></li>
            </ul>
        </nav>

    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
