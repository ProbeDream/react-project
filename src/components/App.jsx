import React,{Component} from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "./reset.css"
import "normalize.css";
import "./App.css";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo:'test',
      todoList:[
          { id: 1, title: "Learning Vue" },
          { id: 2, title: "Learning Angular" },
          { id: 3, title: "Learning React" }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
        return (
            <ul>
                <TodoItem todo={item}></TodoItem>
            </ul>
        );
    });
    return (
        <div className="App">
            <h3>我的待办</h3>
            <div className="inputWrapper">
                <TodoInput content={this.state.newTodo}/>
            </div>
            <ol>{todos}</ol>
        </div>
    );
  }
}
export default App;