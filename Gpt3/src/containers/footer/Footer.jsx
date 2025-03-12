import "./footer.css"
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  const links = ['Overons', 'Social Media' ,'Counters', 'Contact'];
  const Company = ['Terms & Conditions', 'Privacy Policy' ,'Contact'];
  const getInTouch = ['Crechterwoord K12 182 DK Alknjkcb', '085-132567' ,'info@payme.net'];

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-init">
        <h1 className=" gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className='gpt3__footer-init__btn'>
          <button type="button">
          Request Early Access
          </button>
        </div>
      </div>
      
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container__heading">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb,<br/> All Rights Reserved</p>
        </div>
        
        <div className="gpt3__footer-container__content-links">
          <h2>Links</h2>
          {links.map((items,indexes)=>(
            <li key={indexes}>
              <p>{items}</p>
            </li>
          ))}
        </div>
        <div className="gpt3__footer-container__content-Company">
          <h2>Company</h2>
          {Company.map((items,indexes)=>(
            <li key={indexes}>
              <p>{items}</p>
            </li>
          ))}
        </div>
        <div className="gpt3__footer-container__content-getInTouch">
          <h2>Get In Touch</h2>
          {getInTouch.map((items,indexes)=>(
            <li key={indexes}>
              <p>{items}</p>
            </li>
          ))}
        </div>

      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer;