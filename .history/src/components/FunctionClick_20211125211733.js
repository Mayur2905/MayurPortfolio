import React from 'react'

const FunctionClick = () => {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClick
