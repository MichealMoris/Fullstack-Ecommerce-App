import { useState } from "react"

export default function SizePicker() {
    const [size, setSize] = useState("s")
    const sizes = ["s", "m", "lg"]
    return (
        <div className="d-flex align-items-center">
            {
                sizes.map((mSize, index) => {
                    return (
                        <div className={size == mSize ? "me-1 selected-size-picker" : "size-picker me-1"} onClick={()=>{setSize(mSize)}}>
                            <div key={index}>
                                {mSize}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}