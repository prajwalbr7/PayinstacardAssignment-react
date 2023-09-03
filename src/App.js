import './App.css'
import Header from './components/Header'
import SignUpPage from './components/SignUpPage'
import TropicalAdvantage from './components/TropicalAdventure'
import Destination from './components/Destination'
import Discount from './components/Discounts'
import BookNow from './components/BookNow'
import Testimonials from './components/Testimonials'
import StudentSpecialDiscount from './components/StudentSpecialDiscountRate'

const App = () => (
  <div className="MainContainer">
    <Header />
    <SignUpPage />
    <TropicalAdvantage />
    <Destination />
    <Discount />
    <BookNow />
    <Testimonials />
    <StudentSpecialDiscount />
  </div>
)

export default App
