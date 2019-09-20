import  React,{Component} from "react";
import "./TodoItem.css";
class TodoItem extends Component {
    render() {
        return (
            <div className="todoItem">
                <input type="checkBox" checked={this.props.todo.status === "completed"}
                       onChange={this.toggle.bind(this)}
                />
                <span className='title'>{this.props.todo.title}</span>
                <button onClick={this.deleted.bind(this)}>删除</button>
            </div>
        );
    }

    toggle(e) {this.props.onToggle(e, this.props.todo);}

    deleted(e) {this.props.onDelete(e, this.props.todo);}
}
export default TodoItem;