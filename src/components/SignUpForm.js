import React from  "react";
export  default  function(props){
    return (
        <form className="signUp" onSubmit={props.onSubmit.bind(this)}>
            <div className="row">
                <label >邮&nbsp;&nbsp;&nbsp;箱</label>
                <input type="text" value={props.formData.email} onChange={props.onChange.bind(null, 'email')}/>
            </div>
            <div className="row">
                <label >用户名</label>
                <input   type="text" value={props.formData.username} onChange={props.onChange.bind(null, 'username')}/>
            </div>
            <div className="row">
                <label >密&nbsp;&nbsp;&nbsp;码</label>
                <input   type="password" value={props.formData.password} onChange={props.onChange.bind(null, 'password')}/>
            </div>
            <div className="row actions">
                <button type="submit" >注册</button>
            </div>
        </form>
    );
}
