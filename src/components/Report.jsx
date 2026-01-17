import { useState } from "react"
import { useContext } from "react"
import { Context } from "../Contextprovider"
const Report = () => {
    const { place, surPlace, desc, weather, cel, Icon, Ecel,min,max} = useContext(Context)

    return (
        <div className="items-center flex flex-col gap-10 my-5">
            {
                Ecel ? <h1 className="font-medium text-2xl text">{place},{surPlace}</h1> : <h1 className="font-medium text-2xl"></h1>
            }
            <div className="text-center">
                <p>{weather}</p>
                <p>{desc}</p>
            </div>
            {
                Ecel ? <h1  className="font-bold text-4xl ">{cel}°c</h1> : <h1 className="font-medium text-4xl ">--°c</h1>
            }

            <img className="w-[50%] " src={Icon}></img>
            <div className="flex gap-1 text-center">
                <p className="border-r pr-1">min <br /> {
                    Ecel? <span>{min}°c</span>:<span>--°c</span>
                }</p><p>max <br />
                {
                    Ecel? <span>{max}°c</span>:<span>--°c</span>
                }
                </p>
            </div>
        </div>
    )
}
export default Report