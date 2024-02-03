// Code Keypad Component Here
import React from 'react'
function Keypad (){
    return (
        <div>
        <input type="password" onChange={handleChange}></input>
        <button>Enter</button>
    </div>
    )
}

export default Keypad;