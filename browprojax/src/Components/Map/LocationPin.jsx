

const LocationPin = ({ text }) => (
  <div className="pin">
    <i className="fa fa-map-marker pin-icon" aria-hidden="true"></i>
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin