import React, {Component} from "react";

class SignUpForm extends Component {
    render() {
        return (
            <form className="signIn" onSubmit={this.signIn.bind(this)}>
                <div className="row">
                    <label >用户名</label>
                    <input autoComplete="true"  type="text" value={this.state.formData.username} onChange={this.changeFormData.bind(null, 'username')}/>
                </div>
                <div className="row">
                    <label >密&nbsp;&nbsp;&nbsp;码</label>
                    <input autoComplete="true"  type="password" value={this.state.formData.password} onChange={this.changeFormData.bind(null, 'password')}/>
                </div>
                <div className="row actions">
                    <button type="submit">登录</button>
                    <a href="#" onClick={this.showForgotPassword}>忘记密码</a>
                </div>
            </form>
        );
    }
}
export default SignUpForm;