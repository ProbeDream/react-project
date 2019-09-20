import React,{Component} from "react";
class TodoInput extends Component{
    render(){
        return (<input type='text'  defaultValue={this.props.content} onKeyPress={this.submit.bind(this)}/>);
    }
    submit(e){
        if (e.key === 'Enter'){console.log(`用户提交了具体数据为:${e.target.value}`);this.props.onSubmit(e);}
    }
}
export default TodoInput;