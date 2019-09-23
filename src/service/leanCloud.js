import AV from "leancloud-storage";
import Key from "../config/key";

let APP_ID = Key.APP_ID;
let APP_KEY = Key.APP_KEY;
AV.init({
    appId:APP_ID,appKey:APP_KEY
});

export default AV;
export function signUp(email,username,password,successFn,errorFn){
    let user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
    user.signUp().then(loginedUser=>{
        let user = getUserFormAVUser(loginedUser);
        successFn.call(null,user);
    },error=>{
        errorFn.call(null,error);
    });
    return undefined;
}

export function getCurrentUser(){
    let user = AV.User.current();
    return !user ? null : getUserFormAVUser(user);
}

export function signOut(){
    AV.User.logOut();
    return undefined;
}

export function signIn(username,password,successFn,errorFn){
    AV.User.logIn(username,password).then(loginedUser=>{
        let user = getUserFormAVUser(loginedUser);
        successFn.call(null,user);
    },(error)=>{
        errorFn.call(null,error);
    });
}

function getUserFormAVUser(AVUser){
    return {id:AVUser.id,...AVUser.attributes}
}

