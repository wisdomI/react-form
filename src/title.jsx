// Practicing The useState React Hook

import { useState } from "react";


const Title = () => {

    
    const [title, updateTitle] = useState('my title')
    const [inputVal, updateInput] = useState("")
    const [list, updatelist] = useState([])

    return (
        <div>
            <h3>
                {title}
            </h3>

            <input 
                type="text" 
                name="" id=""
                onChange={(e) => {
                    updateInput(e.target.value)
                }} 
            />

            <button
                onClick={() => 
                {
                    updateInput("")
                    updateTitle(inputVal)
                    updatelist([...list, inputVal])
                }}
            >
                click me
            </button>

            {
                list.map((item,i) => <div key={i}> {item} </div>)
            }
        </div>
    )

}

export default Title