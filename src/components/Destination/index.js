import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'

const Destination = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    infinite: false,
  }
  const ImageArray = [
    {
      image: '/img/card-image.png',
      name: 'Harvard University',
      text: 'Cambridge, Massachusetts, UK',
    },
    {
      image: '/img/card-image (1).png',
      name: 'Oxford University',
      text: 'Oxford, England',
    },
    {
      image: '/img/card-image (2).png',
      name: 'Stanford University',
      text: 'Stanford, California',
    },
    {
      image: '/img/card-image (3).png',
      name: 'Nanyang Technological University',
      text: 'Nanyang Ave, Singapura',
    },
  ]
  return (
    <div className="DestinationMainContainer">
      <h1 className="DestinationHeading">Our Destinations</h1>
      <div className="sliderContainer">
        <Slider {...settings}>
          {ImageArray.map(eachItem => (
            <div className="DestinationImageListContainer">
              <img
                src={eachItem.image}
                alt="Card-img"
                className="DestinationImg"
              />
              <h1 className="ListDestinationHeading">{eachItem.name}</h1>
              <div className="DestinationParaIcon">
                <p className="ListDestinationPara">{eachItem.text}</p>
                <HiOutlineDotsCircleHorizontal />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default Destination
