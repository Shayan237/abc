import React from 'react';
import App from './App';
class ToDoInput extends React.Component
{
  state={inputVal:""}
  
  handleChange=(event)=>{
  this.setState({inputVal:event.target.value});
  }

  render() {
  return(<div>
         <input onChange = {this.handleChange}/>
         <button onClick = {()=>this.props.addToItem(this.state.inputVal)}> Add               </button>
           </div>
    );
  }
}