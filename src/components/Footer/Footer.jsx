import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={youtube_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Gift Cards</li>
                <li>Media centre</li>
                <li>INvestor Relations</li>
                <li>Jobs</li>
                <li>Term Of use</li>
                <li>Privacy</li>
                <li>Legal Notice</li>
                <li>Cookie Preferences</li>
                <li>Coparate Information</li>
                <li>Contact us</li>
            </ul>
            <p className="copyright-text">1997-2024 Netflix, Inc.</p>
        </div>
    )
}

export default Footer