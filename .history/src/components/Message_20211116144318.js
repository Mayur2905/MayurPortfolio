import React from 'react'
import { Component } from 'react'

class Message  extends Component {
    constructor(){
        super()
        this.state={
            message : 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thsnks for Subscribing'
        })
    }
    render(){
        return (
        <div>
           <h1>{this.state.message}</h1> 
           <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
    )
}
} 

export default Message;
