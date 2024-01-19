import { useState } from "react"

export default function ColorPicker() {
    const [color, setColor] = useState(0)
    const colors = ["red", "green", "blue"]
    return (
        <div className="d-flex align-items-center">
            {
                colors.map((mColor, index) => {
                    return (
                        <div className={color == index ? "color-border me-1 color-picker" : "color-picker me-1"} onClick={()=>{setColor(index)}}>
                            <div key={index} style={{ backgroundColor: mColor, width: 20 + "px", height: 20 + "px", borderRadius: 50 + "%" }}>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}