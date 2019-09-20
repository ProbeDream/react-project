import React,{Component} from "react";

class UserDialog extends Component{
    render() {
        return (
            <div className="UserDialogWrapper">
                <div className="UserDialog">
                    <nav>
                        <input type="radio"/>
                        <input type="radio"/>
                    </nav>
                </div>

                <div className="panel">
                    <form className="signUp">
                        <div><label className="row">用户名</label><input type="text"/></div>
                        <div><label className="row">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"/></div>
                        <div><label className="row actions">注册</label><button type="submit">密码</button></div>
                    </form>
                    <form className="signIn">
                        <div><label className="row">用户名</label><input type="text"/></div>
                        <div><label className="row">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"/></div>
                        <div><label className="row">登录</label><button type="submit">登录</button></div>
                    </form>
                </div>
            </div>
        );
    }
}
export default UserDialog;