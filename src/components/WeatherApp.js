import {useState, useEffect} from 'react'
import './style.css'
import WeatherCard from './WeatherCard'

const WeatherApp = ()=>{
    const [inp, SetInp] = useState("noida")
    const [weatherInfo, SetWeatherInfo] = useState({}) //to pass data fetched from API as props

    useEffect(()=>{
        getWeatherInfo()
    },[])

    const getWeatherInfo = async ()=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${process.env.REACT_APP_API_ID}&units=metric`

            
            const res = await fetch(url)
            const data =  await res.json()
            const {temp, humidity, pressure} = data.main
            const {name} = data
            const {country} = data.sys
            let {sunset} = data.sys
            const {speed:windSpeed} = data.wind
            const {main:weatherMood} = data.weather[0]
            
            sunset = new Date(sunset*1000).toLocaleTimeString('en-IN',{hour: 'numeric', minute: 'numeric'}).toUpperCase()

            SetWeatherInfo({
                temp,
                humidity,
                pressure,
                name,
                country,
                sunset,
                windSpeed,
                weatherMood
            })
           
        }
        catch(err){
            console.log(err)
        }
    }
    

    return(
        <>
            <div className = 'parent'>
                <div className = 'search-bar'>
                    <input type= 'search' placeholder='enter city name' autoFocus value={inp} onChange= {(ele)=>SetInp(ele.target.value)}/>
                    <button type='button' onClick={getWeatherInfo}>Search</button>
                </div>

                <WeatherCard wIn={weatherInfo} />
            </div>
            
        </>
    )
}

export default WeatherApp