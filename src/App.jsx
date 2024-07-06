
import './App.css'
import Input from './Components/Input';
import Card from './Components/Card';
import { useSelector } from 'react-redux';
import Loader from './Components/Loader';


function App() {
  const loader = useSelector((state)=>state.weather.loader)

  return (
    <div className='App-container'>
       <div className='Heading-container'>
        <h1>Weather App</h1>
       </div>
       <Input />
       {loader === true ? <Loader /> : <Card />}
      
    </div>
  )
}

export default App
