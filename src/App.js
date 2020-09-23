import React from 'react';

   class Count extends React.Component{
    constructor(){
      super()
      this.state={
        temp:0
      }
      
    }
     
    
    plus=()=>{
      this.setState(prevState=>{return {temp:prevState.temp+1 }})
      }
    minus=()=>{
      this.setState(prevState=>{return {temp:prevState.temp-1 }})
      }
    reset=()=>{
      this.setState({temp:0 })
      }
     
      render(){
      const {temp}=this.state
      return(
         <div style={{marginLeft:"40%"}}>
            <h1 style={{marginLeft:"4%"}}>{temp}</h1>
            <button onClick={this.plus}>+</button>
            <button onClick={this.reset}>reset</button>
            <button onClick={this.minus}>-</button> 
         </div>
       )
     }
   }

export default Count;
