import React from 'react'

export const Greet = ({name,heroName}) => {
    return (
        <div>
           <h1>
               Hello {name} a.k.a {heroName}
            </h1> 
        </div>
    )
}
 export default Greet