import React,{Component} from "react";
import "./UserDialog.css";

class UserDialog extends Component{
    constructor(props){
        super(props);
        this.state = {selected:'signUp'};
    }
    switch(e){
        this.setState({
            selected:e.target.value
        })
    }
    render() {
        let signUpForm = (
            <form className="signUp">
                <div className="row">
                    <label >注册</label>
                    <input type="text"/>
                </div>
                <div className="row">
                    <label >登录</label>
                    <input type="password"/>
                </div>
                <div className="row actions">
                    <button type="submit">注册</button>
                </div>
            </form>
        );
        let signInForm = (
            <form className="signUp">
                <div className="row">
                    <label >注册</label>
                    <input autoComplete="true"  type="text"/>
                </div>
                <div className="row">
                    <label >登录</label>
                    <input autoComplete="true"  type="password"/>
                </div>
                <div className="row actions">
                    <button type="submit">登录</button>
                </div>
            </form>
        )
        return (
            <div className="UserDialogWrapper">
                <div className="UserDialog">
                    <nav onChange={this.switch.bind(this)}>
                        <label ><input type="radio" value='signUp' checked={this.state.selected === 'signUp'}/>注册</label>
                        <label ><input type="radio" value='signIn' checked={this.state.selected === 'signIn'}/>登录</label>
                    </nav>

                    <div className="panel">
                        {this.state.selected === 'signUp' ? signUpForm : null}
                        {this.state.selected === 'signIn' ? signInForm : null}
                    </div>

                </div>
            </div>
        );
    }
}
export default UserDialog;