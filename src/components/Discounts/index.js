import './index.css'

const Discount = () => (
  <div className="DiscountMainContainer">
    <div className="DiscountRow">
      <div className="">
        <div className="DiscountImageContainer">
          <img
            src="/img/Ellipse 53.png"
            alt="Ellipse53"
            className="Ellipse53"
          />
          <img
            src="/img/Subtract (2).png"
            alt="Subtract2"
            className="DiscountSubtract2"
          />
        </div>
        <div className="DiscountSubContainer">
          <div>
            <p className="DiscountParaStyle">Get 20% off for student</p>
            <h1 className="DiscountHeadingContainer">
              Student discounts available.{' '}
              <span className="DiscountHeadingSpan">
                {' '}
                Get ready for some fun in the sun!
              </span>
            </h1>
            <ul className="UlContainerStudentTropical">
              <li className="listStudentTropical">
                Lorem ipsum dolor sit amet
              </li>
              <li className="listStudentTropical">
                {' '}
                Massa quis natoque sit quam
              </li>
              <li className="listStudentTropical">
                {' '}
                Eros non pellentesque elit
              </li>
              <li className="listStudentTropical">
                tortor id euismod habitant
              </li>
              <li className="listStudentTropical">
                Sed suspendisse id in ultrices
              </li>
            </ul>
          </div>
          <button type="button" className="TropicalStudentButton">
            Explore More
          </button>
          <div className="DiscountEllipse54Container">
            <img
              src="/img/Ellipse 54.png"
              alt="Ellipse54"
              className="DiscountEllipse54"
            />
          </div>
        </div>
      </div>
      <img
        src="/img/Ellipse 55.png"
        alt="Ellipse55"
        className="DiscountEllipse55"
      />
    </div>
    <div className="MaskContainer">
      <img
        src="/img/Mask group.png"
        alt="Mask group"
        className="MaskGroupStyle"
      />
    </div>
  </div>
)
export default Discount
