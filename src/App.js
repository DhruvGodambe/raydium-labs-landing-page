import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import backgroundImage from './assets/background-logo-image-1.png';
import backgroundImage2 from './assets/background-logo-image-2.png';

function App() {
  return (
    <div className="App">

      <div className='section-1' style={{background: `url(${backgroundImage})`}}>
        <Navbar/>
        
        <div className='top-image-container'>
          <img src='first-section-image.png' />
        </div>
        <div className='section-1-heading'>
          <img src='top-heading.png' />
        </div>
        <div className='section-1-sub-section'>
          <img src='second-heading.png' />
        </div>
      </div>

      <div id='services' className='services-section'>
        <div className='services-heading'>
          <p>SERVICES</p>
        </div>
        <div className='services-list'>
          <div className='service-item'>
            <div className='service-item-heading'>
              <p>BRANDING</p>
              <img src="plus-icon.png"/>
            </div>
            <hr/>
          </div>
          <div className='service-item'>
            <div className='service-item-heading'>
              <p>UI / UX DESIGN</p>
              <img src="plus-icon.png"/>
            </div>
            <hr/>
          </div>
          <div className='service-item'>
            <div className='service-item-heading'>
              <p>BUILD A WEBSITE / BUILD AN APP</p>
              <img src="plus-icon.png"/>
            </div>
            <hr/>
          </div>
          <div className='service-item'>
            <div className='service-item-heading'>
              <p>ONLINE PAYMENT GATEWAYS</p>
              <img src="plus-icon.png"/>
            </div>
            <hr/>
          </div>
        </div>
      </div>

      <div className='section-2' style={{background: `url(${backgroundImage2})`}}>
        <div id='projects' className='project-section'>
          <div className='project-heading'>
            <img src="our-project-title.png" />
          </div>
          <div className='project-description'>
            <p>THEY DREAM ABOUT IT</p>
            <hr></hr>
            <p>WE BUILD IT</p>
          </div>
          <div className='project-list-container'>
            <div className='project-list'>
              <div className='project-list-item'>
                <a href='https://biopharmaawards.imapac.com/' target="_blank"><img src='project-image-1.png'/></a>
              </div>
              <div className='project-list-item'>
                <a href='https://navdivyangfoundation.in/' target="_blank"><img src='project-image-2.png'/></a>
              </div>
              <div className='project-list-item' style={{width: "10%"}}>
                <a href='https://hyperweb.ai/' target="_blank"><img src='project-image-3.png'/></a>
              </div>
              <div className='project-list-item'>
                <a href='https://www.goyaana.com/landing' target="_blank"><img src='project-image-4.png'/></a>
              </div>
              <div className='project-list-item'>
                <a href='https://enochdev.com/en' target="_blank"><img src='project-image-5.png'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div id='team' className='leadership-section'>
          <div className='leadership-heading'>
            <p>LEADERSHIP</p>
          </div>
          <div className='leadership-container'>
            <div className='leader'>
              <img src="leadership-dhruv.png"/>
            </div>
            <div className='leader'>
              <img src="leadership-atul.png"/>
            </div>
          </div>
        </div>

        <div className='section-3-seperator'>
          <img src='section3-seperator.png' />
        </div>

        <div id='contact' className='contact-section'>
          <div className='contact-content'>
            <div className='contact-heading'>
              <p>GET IN TOUCH</p>
            </div>
            <div className='contact-describer'>
              <div className='aesthetic-box'></div>
              <div className='contact-description'>
                <p>Our dedicated team of experts is passionate about crafting innovative software solutions tailored to your unique needs. Whether you have a specific project in mind, need consultation, or simply want to explore the possibilities, we're here to assist you every step of the way.</p>
              </div>
            </div>
          </div>
          <div className='contact-form-container'>
            <div className='contact-form'>
              <div className='contact-input-container'>
                <input name='Name' placeholder='Name' type='text' />
              </div>
              <div className='contact-input-container'>
                <input name='Email' placeholder='Email' type='email' />
              </div>
              <div className='contact-input-container'>
                <textarea name='Message' placeholder='Message' rows={10} />
              </div>
              <div className='contact-button-container'>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='partners-section'>
        <div className='partners-heading'>
          <img src="partners-heading.png"/>
        </div>
        <div className='partners-list'>
          <div className='partner-item'>
            <img src="partner-ezl.png" />
          </div>
          <div className='partner-item'>
            <img src="partner-ether-authority.png" />
          </div>
          <div className='partner-item'>
            <img src="partner-carbon.png" />
          </div>
          <div className='partner-item'>
            <img src="partner-imapac.png" />
          </div>
          <div className='partner-item'>
            <img src="partner-enoch.png" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
