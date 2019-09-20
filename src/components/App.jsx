import React,{Component} from "react";
import TodoItem from "./TodoItem";
import "normalize.css";
import "./App.css";
import TodoInput from "./TodoInput";

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
    return todos;
  }
}
export default App;