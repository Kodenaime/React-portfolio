
import  './card.css'

const card = ({Children, className, onClick}) => {
  return (
    
    <article className={`card ${className}`} onClick={onClick}>
      {Children}
    </article>

  )
}

export default card