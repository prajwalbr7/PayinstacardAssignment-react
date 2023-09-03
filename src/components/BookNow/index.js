import {useState} from 'react'
import './index.css'

const BookNow = () => {
  const [Star, setStar] = useState(4)
  const [Room, setRoom] = useState(1)

  const DecrementStar = () => {
    setStar(prevState => prevState - 1)
  }

  const IncrementStar = () => {
    setStar(prevState => prevState + 1)
  }

  const IncrementRoom = () => {
    setRoom(prevState => prevState + 1)
  }

  const DecrementRoom = () => {
    setRoom(prevState => prevState - 1)
  }
  return (
    <div className="BookNowMainContainer">
      <div className="ContainerSubBookNow">
        <img src="/img/BookNowImage.jpg" alt="Group167" className="Group167" />

        <form className="BookNowFormContainer" onSubmit="">
          <div className="FormTopContainer">
            <h1 className="FormHeadingBookNow">Book now</h1>
            <p className="FormParaBookNow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="FormInputFiledsContainer">
            <div className="CityContainer">
              <label className="cityLabelStyle" htmlFor="city">
                CITY
              </label>
              <input
                id="city"
                type="text"
                className="CityInputStyle"
                placeholder="Placeholder"
              />
            </div>
            <div className="ArrivalAndDepartureContainer">
              <div className="ArrivalContainer">
                <label htmlFor="Arrival" className="cityLabelStyle">
                  Arrival
                </label>
                <input
                  id="Arrival"
                  placeholder="10 October"
                  className="ArrivalInputFiled"
                />
              </div>

              <div className="ArrivalContainer">
                <label htmlFor="Arrival" className="cityLabelStyle">
                  Departure
                </label>
                <input
                  id="Arrival"
                  placeholder="11 October"
                  className="ArrivalInputFiled"
                />
              </div>
            </div>

            <div className="ArrivalAndDepartureContainer">
              <div className="ArrivalContainer">
                <p className="Arrival">Star</p>
                <div className="ButtonContainer">
                  <button
                    className="buttonStyle1"
                    type="button"
                    onClick={DecrementStar}
                  >
                    -
                  </button>
                  <p className="ButtonCounterPara">{Star}</p>
                  <button
                    className="buttonStyle2"
                    type="button"
                    onClick={IncrementStar}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ArrivalContainer">
                <p className="Arrival">Room</p>
                <div className="ButtonContainer">
                  <button
                    className="buttonStyle1"
                    type="button"
                    onClick={DecrementRoom}
                  >
                    -
                  </button>
                  <p className="ButtonCounterPara">{Room}</p>
                  <button
                    className="buttonStyle2"
                    type="button"
                    onClick={IncrementRoom}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ButtonContainerFinal">
            <button className="ButtonSubmitStyle" type="submit">
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BookNow
