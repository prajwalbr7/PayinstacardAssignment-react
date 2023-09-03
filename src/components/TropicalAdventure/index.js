import './index.css'

const TropicalAdvantage = () => (
  <div className="TropicalMainContainer">
    <div className="CircleContainer">
      <img
        src="/img/Subtract (1).png"
        alt="SubtractCircle1"
        className="SubtractCircle1"
      />
    </div>

    <div className="TropicalSubContainer">
      <ul className="UlStylingTropicalAdvantage">
        <li className="listStylingTropicalAdvantage">
          <div className="listImgHeadingParaContainerTropical">
            <img
              src="/img/avatar.png"
              alt="avatar"
              className="avatarTropicalAdvantage"
            />
            <div className="listHeadingParaContainer">
              <h1 className="listHeadingTropical">Jenny Wilson</h1>
              <p className="listParaTropical">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </li>

        <li className="listStylingTropicalAdvantage">
          <div className="listImgHeadingParaContainerTropical">
            <img
              src="/img/avatar (1).png"
              alt="avatar"
              className="avatarTropicalAdvantage"
            />
            <div className="listHeadingParaContainer">
              <h1 className="listHeadingTropical">Jenny Wilson</h1>
              <p className="listParaTropical">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </li>

        <li className="listStylingTropicalAdvantage">
          <div className="listImgHeadingParaContainerTropical">
            <img
              src="/img/avatar (2).png"
              alt="avatar"
              className="avatarTropicalAdvantage"
            />
            <div className="listHeadingParaContainer">
              <h1 className="listHeadingTropical">Jenny Wilson</h1>
              <p className="listParaTropical">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </li>
      </ul>

      <img src="/img/Ellipse 56.png" alt="Ellipse56" className="Ellipse56" />
      <div className="TropicalStudentMainContainer">
        <div className="ContainerHeadingParaListElements">
          <h1 className="HeadingTropicalStudent">
            Tropical Adventure
            <span className="HeadingTropicalStudentSpan"> for Students.</span>
          </h1>
          <p className="ParaTropicalStudent">
            Student Tropical Vacation: Relax and Recharge
          </p>
          <ul className="UlContainerStudentTropical">
            <li className="listStudentTropical">Lorem ipsum dolor sit amet</li>
            <li className="listStudentTropical">
              {' '}
              Massa quis natoque sit quam
            </li>
            <li className="listStudentTropical"> Eros non pellentesque elit</li>
            <li className="listStudentTropical">tortor id euismod habitant</li>
            <li className="listStudentTropical">
              Sed suspendisse id in ultrices
            </li>
          </ul>
        </div>
        <button type="button" className="TropicalStudentButton">
          Explore More
        </button>
      </div>
    </div>
  </div>
)
export default TropicalAdvantage
