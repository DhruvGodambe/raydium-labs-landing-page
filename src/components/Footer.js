import React from 'react';

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-main-container'>
                <div className='footer-left-container'>
                    <div className='footer-services'>
                        <p className='heading'>Services</p>
                        <p className='service'>Branding</p>
                        <p className='service'>UI/UX Design</p>
                        <p className='service'>Website & App Development</p>
                        <p className='service'>Online Payment Gateways</p>
                    </div>
                    <div className='quick-links'>
                        <p className='heading'>Quick Links</p>
                        <p className='service'>Contact Us</p>
                        <p className='service'>Privacy Policy</p>
                        <p className='service'>Terms & Conditions</p>
                    </div>
                </div>
                <div className='footer-right-container'>
                    <div className='footer-logo'>
                        <img src="raydium-labs-footer-logo.png" />
                    </div>
                    <div className='footer-description'>
                        <p>We are an agile group of builders who can build software that grows your business sales, management and much more.</p>
                    </div>
                    <div className='contact-container'>
                        <div className='contact-input'>
                            <input name="email" placeholder='Enter your email' />
                        </div>
                        <button>Get in touch</button>
                    </div>
                </div>
            </div>
            <div className='footer-ending'>
            @RaydiumLabs 2023 All Rights Reserved
            </div>
        </div>
    )
}