import { createContext } from "react";
import { useState } from "react"
export const Context = createContext()

const Contextprovider = (data) => {

    const [val, setVal] = useState("")
    const [place, setPlace] = useState("")
    const [surPlace, setsurPlace] = useState("")
    const [desc, setDesc] = useState("")
    const [weather, setWeather] = useState("")
    const [Icon, setIcon] = useState("")
    const [cel, setCel] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    // terinary operator useState

    const [Ecel, setECel] = useState(false)
    return (
        <Context.Provider value={{
            val, setVal,
            place, setPlace,
            surPlace, setsurPlace,
            desc, setDesc,
            weather, setWeather,
            cel, setCel,
            Icon, setIcon,
            Ecel, setECel,
            min,setMin,
            max,setMax
        }}>
            {data.children}
        </Context.Provider>
    )
}
export default Contextprovider