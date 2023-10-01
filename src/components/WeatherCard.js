import {useState, useEffect} from 'react'
import './style.css'

const WeatherCard = ({wIn}) => {
    const {temp, weatherMood, name, country, sunset, humidity, pressure, windSpeed} = wIn
    const [weatherIcon, SetWeatherIcon] = useState('')

    useEffect(()=>{
        if(weatherMood === 'Clouds'){
            SetWeatherIcon('wi wi-day-cloudy')
        }
        else if(weatherMood === 'Sunny' || weatherMood === 'Clear'){
            SetWeatherIcon('wi wi-day-sunny')
        }
        else if(weatherMood === 'Haze'){
            SetWeatherIcon('wi wi-day-haze')
        }
        else if(weatherMood === 'Rain'){
            SetWeatherIcon('wi wi-day-rain')
        }
        else if(weatherMood === 'Thunderstorm'){
            SetWeatherIcon('wi wi-day-thunderstorm')
        }
        else if(weatherMood === 'Mist'){
            SetWeatherIcon('wi wi-day-fog')
        }

    },[weatherMood])

    return (
        <>
            <div className='data-box'>
                <div className='main-icon'>
                    <i className={weatherIcon}></i>
                </div>
                <div className='temp-time-box'>
                    <div className='temp-location'>
                        <div className='temp'>{temp}&deg;</div>
                        <div className='place'>
                            <span>{weatherMood}</span>
                            <p>{name}, {country}</p>
                        </div>
                    </div>
                    <div className='date-time'>
                        {new Date().toLocaleString('en-IN').toUpperCase()}
                    </div>
                </div>
                <div className='parameters'>
                    <div className='p1'>
                        <i className='wi wi-sunset'></i>
                        {sunset}<br />
                        Sunset
                    </div>
                    <div>
                        <i className='wi wi-humidity'></i>
                        {humidity}<br />
                        Humidity
                    </div>
                    <div>
                        <i className='wi wi-barometer'></i>
                        Pressure<br />
                        {pressure} MM
                    </div>
                    <div className='p4'>
                        <i className='wi wi-strong-wind'></i>
                        Wind<br />
                        {windSpeed}
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherCard
