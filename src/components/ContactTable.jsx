import "../components/ContactTable.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactTable = () => {
  return (
    <div className="contact-table-container">
      <h2>Kontaktní informace</h2>
      <table className="contact-table">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            </td>
            <td>Telefon:</td>
            <td>+420 123 456 789</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </td>
            <td>Email:</td>
            <td>info@autofb.cz</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            </td>
            <td>Adresa:</td>
            <td>Horusická 256/19, 198 00 Praha 14-Kyje</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable