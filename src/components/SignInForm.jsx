import React from "react";
export default function(props){
    return (
        <form className="signIn" onSubmit={props.onSubmit}>
            <div className="row">
                <label >用户名</label>
                <input   type="text" value={props.formData.username} onChange={props.onChange.bind(null, 'username')}/>
            </div>
            <div className="row">
                <label >密&nbsp;&nbsp;&nbsp;码</label>
                <input   type="password" value={props.formData.password} onChange={props.onChange.bind(null, 'password')}/>
            </div>
            <div className="row actions">
                <button type="submit">登录</button>
                <a href="#" onClick={props.showForgotPassword}>忘记密码</a>
            </div>
        </form>
    );
}
