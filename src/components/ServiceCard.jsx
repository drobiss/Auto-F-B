import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../components/ServiceCard.css"

const ServiceCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="service-card">
      <FontAwesomeIcon icon={icon}/>
      <h4>{title}</h4>
      <p>{description}</p>
      <button className="service-btn">{buttonText} &#62;</button>
    </div>
  )
}

export default ServiceCard