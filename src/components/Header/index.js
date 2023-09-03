import './index.css'

const Header = () => (
  <div className="HeaderMainContainer">
    <ul className="ul-styling-header">
      <li className="list-header-styling">Home</li>
      <li className="list-header-styling">About</li>
      <li className="list-header-styling">Schedules</li>
      <li className="list-header-styling">Membership</li>
      <li className="list-header-styling">Pricing</li>
    </ul>
    <div className="HeaderOfferContainer">
      <p className="">Offers</p>
      <button type="button" className="HeaderButton">
        Courses
      </button>
    </div>
  </div>
)
export default Header
