import React,{Component} from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import * as localStore from "../util/localStore";
import AV from "leancloud-storage";
import Key from "../config/key";
import "./reset.css"
import "normalize.css";
import "./App.css";


let APP_ID = Key.APP_ID;
let APP_KEY = Key.APP_KEY;

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let TestObject = AV.Object.extend('TestObject');
let testObject = new TestObject();
testObject.save({
    words:'LeanCloud WelCome to ProbeDream!'
}).then(data=>{
    console.log('SUCSESS');
});

let id = 0;
function idMarker(){id += 1;return id;}
class App extends Component{
  constructor(props){
    super(props);
    this.state = {newTodo:'', todoList:localStore.loadData('todoList')||[]};
  }
  componentDidUpdate() {localStore.saveData('todoList',this.state.todoList);}

  render() {
    let todos = this.state.todoList.filter((item)=> !item.deleted).map((item,index)=>{
        return (
           <li key={index}>
               <TodoItem  todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)} />
           </li>
        );
    });
    return (
        <div className="App">
            <h3>我的待办</h3>
            <div className="inputWrapper">
                <TodoInput onChange={this.changeTitle.bind(this)} content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
            </div>
            <ol className="todoList">{todos}</ol>
        </div>
    );
  }
    addTodo(event){
      this.state.todoList.push({id:idMarker(), title:event.target.value, status:null,deleted:false});
      this.setState({newTodo:'', todoList:this.state.todoList});
    }

    changeTitle(event){this.setState({newTodo:event.target.value,todoList:this.state.todoList});}

    toggle(event,todo){todo.status = todo.status === 'completed' ? " " : 'completed';this.setState(this.state);}

    delete(event,todo){todo.deleted = true;this.setState(this.state);}
}
export default App;

