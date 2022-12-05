// import HeaderImage from '../../images/avatar1.webp'
import image from '../../images/dan.jpg'
import data from './data'
import './header.css'


const header = () => {
  return (
    <header id="header">

      <div className="container header__container">
        <div className="header__profile">
          <img src={image}alt="header profile" />
        </div>

        <h3>Ekechukwu Daniel</h3>
        <p>
          You are not far away from building your dream website or web app. 
          Get in touch with me and be ready to be amazed as i create modern,
          mobile responsive and highly performant website for your project.
        </p>

        <div className="header__cta">
          <a href="#contact" className='btn primary' > Get in touch</a>
          <a href="#portfolio" className='btn light' > Previous projects</a>
        </div>

        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>


      </div>

    </header>
  )
}

export default header