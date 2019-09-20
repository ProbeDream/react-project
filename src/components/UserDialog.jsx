import React,{Component} from "react";
import "./UserDialog.css"

class UserDialog extends Component{
    render() {
        return (
            <div className="UserDialogWrapper">
                <div className="UserDialog">
                    <nav>
                        <input type="radio"/>注册
                        <input type="radio"/>登录
                    </nav>

                    <div className="panel">
                        <form className="signUp">
                            <div><label className="row">用户名</label><input type="text"/></div>
                            <div><label className="row">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"/></div>
                            <div>
                                <class className="row actions">
                                    <button type="submit">注册</button>
                                </class>
                            </div>
                        </form>
                        <form className="signIn">
                            <div><label className="row">用户名</label><input type="text"/></div>
                            <div><label className="row">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"/></div>
                             <div>
                                 <class className="row">
                                     <button type="submit">登录</button>
                                 </class>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default UserDialog;