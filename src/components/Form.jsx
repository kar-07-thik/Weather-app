import { useContext } from "react";
import { Context } from "../Contextprovider";
import axios from "axios";
const Form = () => {
    const { val, setVal,
        setPlace, setsurPlace, setDesc, setWeather, setCel, setIcon, setECel,setMin,setMax
    } = useContext(Context)
    const inputHandler = (e) => {
        setVal(e.target.value)

    }
    const Report = () => {
        const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=317366d0893b70f51b1b810d27a5e198`)
        weatherData.then(function (Wmsg) {
            const icon = Wmsg.data.weather[0].icon
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
             // icon url
            setIcon(iconUrl)
            setPlace(Wmsg.data.name)
            setsurPlace(Wmsg.data.sys.country)
            setDesc(Wmsg.data.weather[0].description)
            setWeather(Wmsg.data.weather[0].main)
            setCel(Math.floor((Wmsg.data.main.temp) - 273.15))
            setMin(Math.floor((Wmsg.data.main.temp_min)-273.15))
            setMax(Math.floor((Wmsg.data.main.temp_max)-273.15))
            setECel(true)
        }).catch(function (errWmsg) {
            console.log("failed")
        })
        setVal("")
    }
    return (
        <div className="  w-[90%] px-1 py-1 rounded-3xl flex justify-between " style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <input value={val} onChange={inputHandler}  className="focus:outline-hidden ml-2" type="text" placeholder="Enter a city name" />
            <button onClick={Report} className="bg-black p-1   rounded-4xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
        </div>
    )
}
export default Form