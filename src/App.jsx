import './App.css'
import { Cardd } from './pages/Cardd'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <div className=''>
      <LandingPage />
      <div className='grid grid-cols-3 gap-5 mx-3'>
        <Cardd nameTag={"ARTWORK-1"} priceTag={"$100"} imgTag={'pro-1.jpg'} />
        <Cardd nameTag={"ARTWORK-2"} priceTag={"$250"} imgTag={'pro-2.jpg'} />
        <Cardd nameTag={"ARTWORK-3"} priceTag={"$100"} imgTag={'pro-3.jpg'} />
        <Cardd nameTag={"ARTWORK-4"} priceTag={"$250"} imgTag={'pro-4.jpg'} />
        <Cardd nameTag={"ARTWORK-5"} priceTag={"$100"} imgTag={'pro-1.jpg'} />
        <Cardd nameTag={"ARTWORK-6"} priceTag={"$250"} imgTag={'pro-2.jpg'} />
        <Cardd nameTag={"ARTWORK-7"} priceTag={"$100"} imgTag={'pro-3.jpg'} />
        <Cardd nameTag={"ARTWORK-8"} priceTag={"$250"} imgTag={'pro-4.jpg'} />
        <Cardd nameTag={"ARTWORK-9"} priceTag={"$100"} imgTag={'pro-1.jpg'} />
        <Cardd nameTag={"ARTWORK-10"} priceTag={"$250"} imgTag={'pro-2.jpg'} />
        <Cardd nameTag={"ARTWORK-11"} priceTag={"$100"} imgTag={'pro-3.jpg'} />
        <Cardd nameTag={"ARTWORK-12"} priceTag={"$250"} imgTag={'pro-4.jpg'} />
      </div>
    </div>
  )
}

export default App
