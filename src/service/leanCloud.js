import AV from "leancloud-storage";
import Key from "../config/key";

let APP_ID = Key.APP_ID;
let APP_KEY = Key.APP_KEY;
AV.init({
    appid:APP_ID,appKey:APP_KEY
});

export default AV;
