import React from 'react';
import App from './App';
class ToDoList extends React.Component
{

  render() {
              let toDoItems = this.props.toDoItem.map((item,index)=><li>{ item }<button onClick = {() => this.props.removeItem(index)}>Delete
 </button></li>);

  return(<div>
         {
           toDoItems
            
   
         }
         
           </div>
    );
  }
}