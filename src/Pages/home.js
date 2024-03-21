import React from 'react';
import Card from 'react-bootstrap/Card';
import Videos from '../streak_loop.webm'
import TextTransition, { presets } from 'react-text-transition';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { MotionAnimate } from 'react-motion-animate'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Happyicon from "../assets/laughing.png"
import Service_1 from "../assets/service-1.avif"

const h1 = ['Where creativity knows no limits', 'Where Ideas Take Flight', "Crafting Tomorrow's Visual Identity", 'Amplifying Your Voice Across Platforms'];
const h2 = ['Digital Marketing', 'Advertising service', "Design service", 'Media service'];
const p = [' A Creative Digital Marketing Agency in Qatar specialized in Social Media Marketing, SEO, Paid Advertising, Online Marketing Campaigns, Social Media Community management, and E-mail Marketing', 
             'We helps businesses reach their target audience effectively by creating and executing successful campaigns on social media, search engines, display networks, and more. We use data-driven insights to develop tailored strategies that align with your business objectives and drive results.', 
             "We provides creative solutions to elevate your brand identity and engage your audience. From logos to website design, we create visually appealing and functional designs that align with your brand messaging and business objectives. Let us help you make a lasting impression with our expert design services.", 
             'We helps businesses effectively communicate with their target audience through various channels. From content creation to media planning, we offer a range of services to help you reach and engage your audience. Let us help you build a strong media presence and connect with your customers in meaningful ways.'
            ]
function Homepage() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
     <section>
       <div className='contianer-home'>
        
        <Card className='body-card'>
           <video className="auto-videos" loop autoPlay muted={true} preload="auto">
               <source src={Videos} type="video/webm"/>
           </video>
          
           <Card.ImgOverlay className='container'>
            <Row>
            
            <Col sm={7}>
            <MotionAnimate reset={true} delay={1} speed={1}>
              <Card.Title>
                Welcome to <b>Altairads</b>
              </Card.Title>
            </MotionAnimate>
             
            </Col>
            <Col sm={5}>
            <MotionAnimate animation='fadeInUp' reset={true} delay={1} speed={1}>
            <h1 className='style_2'><b className='style_1'><TextTransition springConfig={presets.wobbly}>{h2[index % h2.length]}</TextTransition></b>
            <div className='mr-bt'></div>
            <TextTransition springConfig={presets.wobbly}>{h1[index % h1.length]}</TextTransition></h1>  
            <Card.Text>
            <TextTransition springConfig={presets.wobbly}>{p[index % p.length]}</TextTransition>
          
            </Card.Text>
            <Card.Text className='yellow'>Get a Quote Now  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Card.Text>
            </MotionAnimate>  
           
            </Col>
            <MotionAnimate reset={true} delay={1} speed={1}>
            <h2 className='style_1 h3'>Our&nbsp;&nbsp;<Image src={Happyicon} width="45" height="45" className="d-inline-block align-top" alt="React Bootstrap logo"/>&nbsp;&nbsp;<b className='style_1'>Happy Clients</b></h2>
             
             <div className='client-hm-list'>
             <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11.png"
                data-xtra-lightbox="" tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11-300x136.png" class="attachment-medium"
                    alt="" title=""
                    srcset="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11-300x136.png 300w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11-1024x464.png 1024w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11-768x348.png 768w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11-600x272.png 600w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-11.png 1067w"
                    sizes="(max-width: 300px) 100vw, 300px"/>
            </a>

            <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03.png"
                data-xtra-lightbox="" tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03-300x136.png" class="attachment-medium"
                    alt="" title=""
                    srcset="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03-300x136.png 300w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03-1024x464.png 1024w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03-768x348.png 768w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03-600x272.png 600w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-03.png 1067w"
                    sizes="(max-width: 300px) 100vw, 300px"/>

            </a>
            <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02.png"
                data-xtra-lightbox="" tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02-300x136.png" class="attachment-medium"
                    alt="" title=""
                    srcset="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02-300x136.png 300w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02-1024x464.png 1024w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02-768x348.png 768w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02-600x272.png 600w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-02.png 1067w"
                    sizes="(max-width: 300px) 100vw, 300px"/>

            </a>
            <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01.png"
                data-xtra-lightbox="" tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01-300x136.png" class="attachment-medium"
                    alt="" title=""
                    srcset="https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01-300x136.png 300w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01-1024x464.png 1024w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01-768x348.png 768w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01-600x272.png 600w, https://altairads.com/wp-content/uploads/2023/04/web-logos-1-01.png 1067w"
                    sizes="(max-width: 300px) 100vw, 300px"/>

            </a>
            <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/osis.png" data-xtra-lightbox=""
                tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/osis.png" class="attachment-medium" alt="" title="osis"/>

            </a>
            <a class="cz_grid_link " href="https://altairads.com/wp-content/uploads/2023/04/jaguar.png" data-xtra-lightbox=""
                tabindex="-1"><img decoding="async" width="300" height="136"
                    src="https://altairads.com/wp-content/uploads/2023/04/jaguar.png" class="attachment-medium" alt=""
                    title="jaguar"/>
            </a>

            <a class="cz_grid_link view_more">
                More
            </a>
          
           
             </div>
            </MotionAnimate>
            </Row>
            
           
         
          </Card.ImgOverlay>
    
           
        </Card>
       
         </div>
         {/* <div class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1 curve-svg">
              <div class="position-relative start-50 translate-middle-x flex-shrink-0">
                <svg width="3774" height="201" viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor"></path></svg>
              </div>
            </div> */}

  
     <div className='contianer-about padding-6rem'>
         
      <Container>
         <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
         <h2 className='style_1 h1'>About <b>Altairads</b></h2>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why Altairads?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Our Story</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Our Mission</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> 
          </MotionAnimate>
         </Container>          
        </div>
   
        <div className='contianer-service padding-6rem'>
            <Container>
            <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                      <h2 className='style_1 h1'>Our <b>Services</b></h2>
                   </MotionAnimate>
                 
                   <div className='service-grid'>
                  <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                       <div className='service-col'>
                              <Col sm={7}>
                              <MotionAnimate delay={0.4} speed={2} ease={[0.75, 0.45, 0.53, 0.94]} reset={true}>
                                <h2 className='style_1 h1'><b>Advertising</b></h2>
                                 <article>
                                    <p>Our Advertising service helps businesses reach their target audience effectively by creating and executing successful campaigns on social media, search engines, display networks, and more. We use data-driven insights to develop tailored strategies that align with your business objectives and drive results.</p>
                                </article>
                                <div className='style-crums'>
                                  <span className='badge'>Strategy & Creative</span>
                                  <span className='badge'>ATL & BTL</span>
                                  <span className='badge'>Printing</span>
                                  <a href="#contact" class="yellow card-text">Learn More  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                                </MotionAnimate>
                            </Col>
                            <Col sm={5}>
                                    <Image src={Service_1} className="service-img" alt="service image"/>
                            </Col>
                       </div>
                       </MotionAnimate>
                      <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                       <div className='service-col'>
                              <Col sm={7}>
                              <MotionAnimate delay={0.4} speed={2} ease={[0.75, 0.45, 0.53, 0.94]} reset={true}>
                                <h2 className='style_1 h1'><b>Design</b></h2>
                                 <article>
                                    <p>Our Design service provides creative solutions to elevate your brand identity and engage your audience. From logos to website design, we create visually appealing and functional designs that align with your brand messaging and business objectives. Let us help you make a lasting impression with our expert design services.</p>
                                </article>
                                <div className='style-crums'>
                                  <span className='badge'>Branding</span>
                                  <span className='badge'>Digital Assets</span>
                                  <span className='badge'>Collateral</span>
                                  <a href="#contact" class="yellow card-text">Learn More  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                                </MotionAnimate>
                               
                            </Col>
                            <Col sm={5}>
                                    <Image src={Service_1} className="service-img" alt="service image"/>
                            </Col>
                       </div>
                       </MotionAnimate>

                      <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                       <div className='service-col'>
                              <Col sm={7}>
                              <MotionAnimate delay={0.4} speed={2} ease={[0.75, 0.45, 0.53, 0.94]} reset={true}>
                                <h2 className='style_1 h1'><b>Digital</b></h2>
                                 <article>
                                    <p>Our Digital service is a comprehensive solution to enhance your online presence and drive business growth. We offer a range of services, including website development, search engine optimization, social media marketing, and more. Let us help you leverage the power of digital marketing to reach your target audience and achieve your marketing goals.</p>
                                </article>
                                <div className='style-crums'>
                                  <span className='badge'>Social Media Management</span>
                                  <span className='badge'>Search Engine Optimization</span>
                                  <span className='badge'>PPC - Paid Advertising</span>
                                  <span className='badge'>On - Demand Campaigns</span>
                                  <span className='badge'>Website Development</span>
                                  <span className='badge'>Custom Web Applications</span>
                                  <a href="#contact" class="yellow card-text">Learn More  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                                </MotionAnimate>
                               
                            </Col>
                            <Col sm={5}>
                                    <Image src={Service_1} className="service-img" alt="service image"/>
                            </Col>
                       </div>
                       </MotionAnimate>

                      <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                       <div className='service-col'>
                              <Col sm={7}>
                              <MotionAnimate delay={0.4} speed={2} ease={[0.75, 0.45, 0.53, 0.94]} reset={true}>
                                <h2 className='style_1 h1'><b>Event</b></h2>
                                 <article>
                                    <p>Our Event service provides end-to-end solutions for successful event planning and execution. From corporate events to product launches, we help businesses create memorable experiences that resonate with their audience. Let us help you deliver seamless events that leave a lasting impression and drive business growth.</p>
                                </article>
                                <div className='style-crums'>
                                  <span className='badge'>Conference</span>
                                  <span className='badge'>Product Launch</span>
                                  <span className='badge'>Festivals & Parties</span>
                                  <a href="#contact" class="yellow card-text">Learn More  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                                </MotionAnimate>
                               
                            </Col>
                            <Col sm={5}>
                                    <Image src={Service_1} className="service-img" alt="service image"/>
                            </Col>
                       </div>
                       </MotionAnimate>

                       <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
                       <div className='service-col'>
                              <Col sm={7}>
                              <MotionAnimate delay={0.4} speed={2} ease={[0.75, 0.45, 0.53, 0.94]} reset={true}>
                                <h2 className='style_1 h1'><b>Gift</b></h2>
                                 <article>
                                    <p>Our Corporate Gift service helps businesses create lasting impressions by providing unique and customized gifts for clients, partners, and employees. From branded merchandise to personalized gifts, we offer a range of options to suit your needs and budget. Let us help you strengthen your business relationships through thoughtful corporate gifting.</p>
                                </article>
                                <div className='style-crums'>
                                  <span className='badge'>Corporate Gift</span>
                                  <a href="#contact" class="yellow card-text">Learn More  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffaa00" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
                                </div>
                                </MotionAnimate>
                               
                            </Col>
                            <Col sm={5}>
                                    <Image src={Service_1} className="service-img" alt="service image"/>
                            </Col>
                       </div>
                       </MotionAnimate>
                   </div>
            </Container>
        </div>
        <div className='contianer-client padding-6rem'>
             <Container>
             <MotionAnimate animation='fadeInUp' reset={true}  distance={100} delay={1} speed={1}>
             <h2 className='style_1 h1'>Our <b>Clients</b></h2>
             </MotionAnimate>
           
             </Container>
        </div>
     </section>
  );
}

export default Homepage;