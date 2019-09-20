import React,{Component} from "react";
class TodoInput extends Component{
    render(){
        return (
            <inpupt type='text'  value={this.props.content}/>
        );
    }
}
export default TodoInput;