import React from "react";
import { useState } from "react";
import "../App.css"
import {TbTemperatureCelsius} from "react-icons/tb"
import {AiOutlineSearch} from "react-icons/ai"
import { ListIcon } from "../ListIcon";
import Error from "../error.jpg"

function FindWeather(){
    const [city, setCity] = useState('')
    const [data,setData] = useState({})
    const [isLoading,setIsLoading] = useState(true)


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5afe3fdd1dc69f441782b97dd196cd8b&units=metric`
    const searchCity = () =>{ 
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        setData('')
        setIsLoading(false)
    }
    console.log(data)
    

    return(
        <div className="Container">
            <div className="Search">
                <input type="text" 
                placeholder="Search City"
                onChange={e=>setCity(e.target.value)}
                />
                <button
                onClick={searchCity}>
                    <AiOutlineSearch className="Icon"/></button>
            </div>


            
            <div className="Main">
                <div className="Infor">{data.main ? <p>Location: {data.name}</p> : null } </div>
                <div className="Infor">{data.main ? <p>Temperature: {data.main.temp.toFixed()}<TbTemperatureCelsius/></p> : null } </div>
                <div className="Infor">{data.weather ? <p>{data.weather[0].main}</p> : null }</div>
                {data.weather ? (
                    <div className="ImageContainer">
                    {ListIcon.find(List => List.type === data.weather[0].main)  &&
                    <img src={ListIcon.find(List => List.type === data.weather[0].main).img} alt="bg"/> 
                    } 
                </div>
                ):(
                    null
                )}
                <div className="Footer">
                <div className="col">
                    {data.wind ? <p>Wind-speed  <span>{data.wind.speed}</span></p> : null }
                </div>    
                <div className="col">
                    {data.main ? <p>Feels-like <span>{data.main.feels_like.toFixed()} <TbTemperatureCelsius/></span></p> : null }
                    </div>
                <div className="col">
                    {data.main ? <p>Humidity <span>{data.main.humidity}%</span></p> : null }
                </div>
                </div>
            </div>
            


            {
                
                !isLoading && data && data.name == null &&
                <div className="Error">
                        <img src={Error} style={{width:"100%", height:"100%"}} alt="" />
                </div>
            }
            
            



        </div>
    )
}
export default FindWeather