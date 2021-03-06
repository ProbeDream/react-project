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
        successFn && successFn.call(null,user);
    },error=>{
        errorFn && errorFn.call(null,error);
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
        successFn && successFn.call(null,user);
    },(error)=>{
       errorFn && errorFn.call(null,error);
    });
}

export function sendPasswordResetEmail(email,successFn,errorFn){
    AV.User.requestPasswordReset(email).then(success=>{
        successFn && successFn.call();
    },error=>{
        errorFn && errorFn.call(null,error);
    })
}

export const TodoModel = {
    getByUser(user,successFn,errorFn){
        let query = new AV.Query('Todo');
        query.equalTo('deleted',false);
        query.find().then(response=>{
            let array = response.map(t=>{
                return {id:t.id,...t.attributes}
            });
           successFn && successFn.call(null,array);
        },error=>{
           errorFn && errorFn.call(null,error);
        })
    },create({status,title,deleted},successFn,errorFn){
        let Todo = AV.Object.extend('Todo');
        let todo = new Todo();
        todo.set('title',title);
        todo.set('status',status);
        todo.set('deleted',deleted);

        let ACL = new AV.ACL();
        ACL.setPublicReadAccess(false);
        ACL.setWriteAccess(AV.User.current(),true);
        ACL.setReadAccess(AV.User.current(),true);
        todo.setACL(ACL);

        todo.save().then(response=>{
            successFn && successFn.call(null,response.id);
        },error=>{
            errorFn && errorFn.call(null,error);
        });
    },update({id,title,status,deleted},successFn,errorFn){
        let todo = AV.Object.createWithoutData('Todo',id);
        title !== undefined && todo.set('title',title);
        status !== undefined && todo.set('status',status);
        deleted !== undefined && todo.set('deleted',deleted);
        todo.save().then(response=>{
           successFn && successFn.call(null,response);
        },error=> errorFn && errorFn.call(null,error)
        );
    },destroy(todoId,successFn,errorFn){
        TodoModel.update({id:todoId,deleted:true},successFn,errorFn);
    }
};

function getUserFormAVUser(AVUser){
    return {id:AVUser.id,...AVUser.attributes}
}

