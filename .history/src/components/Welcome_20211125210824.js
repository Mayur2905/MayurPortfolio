import React from 'react'
import { Component } from 'react'

class Welcome extends Component {
    render(){

        const {name,heroName} = this.props
        return (
            <div>
           <h1>
            Welcome {name} a.k.a {heroName}
            </h1> 
        </div>
    )
}
}

export default Welcome
