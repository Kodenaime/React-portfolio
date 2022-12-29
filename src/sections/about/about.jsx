import image from '../../images/kode.jpg'
import CV from '../../project/CV.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const about = () => {
  return (
    <section id="about">

      <div className="container about__container">
        
        <div className="about__left">
          <div className="about__pic">
            <img src={image} alt="A portrait of me" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>                  
                </Card>
              ))
            }
          </div>
          <p>
          I am an enthusiastic Front-end web developer, with two years of experience.
           I have experience with the core front-end technologies such as HTML, CSS, and JavaScript. 
          I am open to learning opportunities as a Front-end developer
          </p>
          <p>
          I am a very patient and hard-working person,
           who has the ability to work under pressure and still be as productive. I am friendly, 
          and passionate and have the skills to work in a team in other to achieve a common purpose.
          </p>
          <a href={CV} download className='btn primary' >Download CV<HiDownload/></a>
        </div>

      </div>

    </section>
  )
}

export default about