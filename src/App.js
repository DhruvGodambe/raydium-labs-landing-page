import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion"

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import backgroundImage from "./assets/background-logo-image-1.png";
import backgroundImage2 from "./assets/background-logo-image-2.png";
import backgroundImage3 from './assets/hero-background.png';
import headingDescription from "./assets/constants/hero-section-description.json"

function App() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [showService1, setShowService1] = useState(false);
  const [showService2, setShowService2] = useState(false);
  const [showService3, setShowService3] = useState(false);
  const [showService4, setShowService4] = useState(false);

  const serviceHeaderRef = useRef();
  const serviceYProgress = useScroll({
    target: serviceHeaderRef,
    offset: ["0 1", "1.33 1"]
  })
  const serviceX = useTransform(serviceYProgress.scrollYProgress, [0, 1], [-1000, 0])

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1.5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === headingDescription.data.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, [])



  const handleContactSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: contactName,
      message: contactMessage,
      from_email: contactEmail,
    };

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

    toast.success("Thanks for contacting, we will reach out to you soon!");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => headingDescription.data[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  return (
    <div className="App">
      <ToastContainer />
      <div
        className="section-1"
        style={{ background: `url(${backgroundImage})` }}
      >
        <div 
          
          style={{ background: `url(${backgroundImage3})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
          >
          <Navbar />
          <div className="section-1-container">
            <motion.div
              className="section-1-heading"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 0.5, duration: 1}}
            >
              <p>DIGITIZE YOUR</p>
              <p>BUSINESS</p>
              <div className="section-1-description-container">
                <motion.span className="section-1-description">{displayText}</motion.span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{opacity: 1, scale: 0.9}}
          transition={{duration: 1.5}}
          >  
          <div className="section-1-sub-section">
            <img src="second-heading.png" />
          </div>
        </motion.div>
      </div>

      <div id="services" className="services-section">
        <div className="services-heading">
          <motion.p
            style={{
              x: serviceX,
              opacity: serviceYProgress.scrollYProgress
            }}
            ref={serviceHeaderRef}
            >SERVICES</motion.p>
        </div>
        <div className="services-list">
          <div className="service-item">
            <div className="service-item-heading">
              <p>BRANDING</p>
              <img
                src={showService1 ? "minus-icon.png" : "plus-icon.png"}
                onClick={() => {
                  setShowService1(!showService1);
                }}
              />
            </div>
            {showService1 && (
              <motion.div
                initial={{opacity: 0, y: '-5vh'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className={`service-item-description`}
              >
                Our team focuses on developing a cohesive brand strategy that
                includes logo design, color schemes, typography, and overall
                visual aesthetics. We work closely with you to understand your
                business values, target audience, and market position, ensuring
                that your brand effectively communicates your business’s unique
                story and values. This service is essential for establishing a
                strong, memorable presence in the market, distinguishing you from
                competitors and building customer loyalty.
              </motion.div>
            )}
            <hr />
          </div>
          <div className="service-item">
            <div className="service-item-heading">
              <p>UI / UX DESIGN</p>
              <img
                src={showService2 ? "minus-icon.png" : "plus-icon.png"}
                onClick={() => {
                  setShowService2(!showService2);
                }}
              />
            </div>
            {showService2 && (
              <motion.div
                initial={{opacity: 0, y: '-5vh'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className={`service-item-description`}
              >
              Our UI/UX design service involves crafting visually appealing and
              easy-to-navigate interfaces for websites and applications. We
              focus on understanding user behavior to create a seamless and
              satisfying user journey. This includes designing the layout,
              interactive elements, and visual elements, as well as ensuring
              accessibility and responsiveness across various devices. Our goal
              is to enhance user satisfaction and maximize usability, ultimately
              driving more engagement and conversions for your business.
            </motion.div>
            )}
            <hr />
          </div>
          <div className="service-item">
            <div className="service-item-heading">
              <p>BUILD A WEBSITE / BUILD AN APP</p>
              <img
                src={showService3 ? "minus-icon.png" : "plus-icon.png"}
                onClick={() => {
                  setShowService3(!showService3);
                }}
              />
            </div>
            {showService3 && (
              <motion.div
                initial={{opacity: 0, y: '-5vh'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className={`service-item-description`}
              >
              Whether you need a simple website to establish your online
              presence or a complex web application to run your business
              operations, our team has the expertise to deliver. We specialize
              in creating responsive, fast-loading, and SEO-friendly websites
              and applications that are not only aesthetically pleasing but also
              functional and reliable. From e-commerce platforms to
              informational sites, we ensure that your online presence is
              powerful, scalable, and aligns with your business objectives.
            </motion.div>
            )}
            <hr />
          </div>
          <div className="service-item">
            <div className="service-item-heading">
              <p>ONLINE PAYMENT GATEWAYS</p>
              <img
                src={showService4 ? "minus-icon.png" : "plus-icon.png"}
                onClick={() => {
                  setShowService4(!showService4);
                }}
              />
            </div>
            {showService4 && (
              <motion.div
                initial={{opacity: 0, y: '-5vh'}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className={`service-item-description`}
              >
              Integrating online payment gateways is crucial for businesses
              looking to conduct transactions over the internet. We provide
              secure, efficient, and user-friendly payment gateway integration
              services that allow your customers to make payments through
              various methods like credit cards, debit cards, and digital
              wallets. Our focus is on implementing solutions that offer robust
              security to protect sensitive financial data, ensuring compliance
              with payment industry standards. This service is designed to
              streamline your transaction process, reduce payment processing
              time, and enhance the overall customer purchasing experience.
            </motion.div>
            )}
            <hr />
          </div>
        </div>
      </div>

      <div
        className="section-2"
        style={{ background: `url(${backgroundImage2})` }}
      >
        <div id="projects" className="project-section">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1}}
            className="project-heading">
            <img src="our-project-title.png" />
          </motion.div>
          <div className="project-description">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5}}
              >THEY DREAM ABOUT IT</motion.p>
            <hr></hr>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5}}
            >WE BUILD IT</motion.p>
          </div>
          <div className="project-list-container">
            <div className="project-list">
              <div className="project-list-item">
                <a href="https://biopharmaawards.imapac.com/" target="_blank">
                  <img src="project-image-1.png" />
                </a>
              </div>
              <div className="project-list-item">
                <a href="https://navdivyangfoundation.in/" target="_blank">
                  <img src="project-image-2.png" />
                </a>
              </div>
              <div className="project-list-item" style={{ width: "10%" }}>
                <a href="https://hyperweb.ai/" target="_blank">
                  <img src="project-image-3.png" />
                </a>
              </div>
              <div className="project-list-item">
                <a href="https://www.goyaana.com/landing" target="_blank">
                  <img src="project-image-4.png" />
                </a>
              </div>
              <div className="project-list-item">
                <a href="https://enoch.app/en" target="_blank">
                  <img src="project-image-5.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div id="team" className="leadership-section">
          <div className="leadership-heading">
            <p>LEADERSHIP</p>
          </div>
          <div className="leadership-container">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1}}
              className="leader">
              <img src="leadership-dhruv.png" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1}}
              className="leader">
              <img src="leadership-atul.png" />
            </motion.div>
          </div>
        </div>

        <div className="section-3-seperator">
          <img src="section3-seperator.png" />
        </div>

        <div id="contact" className="contact-section">
          <div className="contact-content">
            <div className="contact-heading">
              <p>GET IN TOUCH</p>
            </div>
            <div className="contact-describer">
              <div className="aesthetic-box"></div>
              <div className="contact-description">
                <p>
                  Our dedicated team of experts is passionate about crafting
                  innovative software solutions tailored to your unique needs.
                  Whether you have a specific project in mind, need
                  consultation, or simply want to explore the possibilities,
                  we're here to assist you every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="contact-form">
              <form>
                <div className="contact-input-container">
                  <input
                    name="Name"
                    placeholder="Name"
                    type="text"
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="contact-input-container">
                  <input
                    name="Email"
                    placeholder="Email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => {
                      setContactEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="contact-input-container">
                  <textarea
                    name="Message"
                    placeholder="Message"
                    rows={10}
                    value={contactMessage}
                    onChange={(e) => {
                      setContactMessage(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="contact-button-container">
                  <button type="submit" onClick={handleContactSubmit}>
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="partners-section">
        <div className="partners-heading">
          <img src="partners-heading.png" />
        </div>
        <div className="partners-list">
          <div className="partner-item">
            <img src="partner-ezl.png" />
          </div>
          <div className="partner-item">
            <img src="partner-ether-authority.png" />
          </div>
          <div className="partner-item">
            <img src="partner-carbon.png" />
          </div>
          <div className="partner-item">
            <img src="partner-imapac.png" />
          </div>
          <div className="partner-item">
            <img src="partner-enoch.png" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
