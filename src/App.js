import React from 'react';

class App extends React.Component
{
  state={toDoArr:[]}
  
  addToDoItem=(text)=>{
    let newArr=[...this.state.toDoArr,text];
    this.setState({toDoArr : newArr});
  };
  deleteItem=(index)=>{
    let copyArr = [...this.state.toDoArr];
    copyArr.splice(index,1);
    this.setState({toDoArr : copyArr});
  }

  render() {
  return(<div>
         <ToDoInput addToItem = {this.addToDoItem} />
         <ToDoList toDoItem = {this.state.toDoArr} removeItem={this.deleteItem} />
         </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
