import AV from "leancloud-storage";
import Key from "../config/key";

let APP_ID = Key.APP_ID;
let APP_KEY = Key.APP_KEY;
AV.init({
    appId:APP_ID,appKey:APP_KEY
});

export default AV;
export function signUp(username,password,successFn,errorFn){
    let user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    user.signUp().then(loginedUser=>{
        let user = getUserFormAVUser(loginedUser);
        successFn.call(null,user);
    },error=>{
        errorFn.call(null,error);
    });
    return undefined;
}
function getUserFormAVUser(AVUser){
    return {id:AVUser.id,...AVUser.attributes}
}

