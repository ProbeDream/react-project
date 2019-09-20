import  React,{Component} from "react";
class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type="checkBox" checked={this.props.todo.status === "completed"}
                       onChange={this.toggle.bind(this)}
                />
                {this.props.todo.title}
                <button onClick={this.deleted.bind(this)}>删除</button>
            </div>
        );
    }

    toggle(e) {this.props.onToggle(e, this.props.todo);}

    deleted(e) {this.props.onDelete(e, this.props.todo);}
}
export default TodoItem;