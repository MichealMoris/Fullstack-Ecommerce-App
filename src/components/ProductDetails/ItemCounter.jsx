import { useState } from "react"

export default function ItemCounter({max}) {
    const [counter, setCounter] = useState(1)
    const decrement = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }
    const increment = () => {
        if(counter < max){
            setCounter(counter + 1)
        }
    }
    return (
        <div className="border rounded d-flex justify-content-between p-2" >
            <span style={{cursor: "pointer", fontFamily: "CerebriSansBold"}} onClick={() => {decrement()}}>-</span>
            <span style={{fontFamily: "CerebriSansBold"}}>{counter}</span>
            <span style={{cursor: "pointer", fontFamily: "CerebriSansBold"}} onClick={() => {increment()}}>+</span>
        </div>
    )
}