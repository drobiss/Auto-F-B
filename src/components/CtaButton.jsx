/* eslint-disable react/prop-types */
import "../components/CtaButton.css"
import { Link } from "react-router-dom"

const CtaButton = ({ buttonText, buttonLink }) => {
  return <>
    <Link to={buttonLink} className="cta-btn">{buttonText}</Link>
  </>
}

export default CtaButton