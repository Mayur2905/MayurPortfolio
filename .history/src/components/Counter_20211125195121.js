import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){ 
        super(props)
        this.state ={
            count :0
        }
    }
    increment(){
        this.setState((prevstate, props)=>({
            count: this.state.count +1 
        },
        () => {
            console.log('Callback value', this.state.count)
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.setState({
            count : this.state.count + 5
         },
         ()=> {
             console.log('Callback value' , this.state.count)
         }
        )
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
                <div><button onClick={()=>this.incrementFive()}>Increment by 5</button></div>
            </div>           
        )
    }
}
export default Counter