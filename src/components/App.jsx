import React,{Component} from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "./reset.css"
import "normalize.css";
import "./App.css";

let id = 0;
function idMarker(){id += 1;return id;}
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo:'',
      todoList:[

      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
        return (
           <li key={index}>
               <TodoItem   todo={item} ></TodoItem>
           </li>
        );
    });
    return (
        <div className="App">
            <h3>我的待办</h3>
            <div className="inputWrapper">
                <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
            </div>
            <ol>{todos}</ol>
        </div>
    );
  }
  addTodo(event){
      this.state.todoList.push({
          id:idMarker(),
          title:event.target.value,
          status:null,deleted:false
      });
      this.setState({
          newTodo:'',
          todoList:this.state.todoList
      })
  }
}
export default App;

