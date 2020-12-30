import { Scope } from "i18n-js";
import {NavigationScreenProp } from "react-navigation";



export default interface IComman{
    navigation:NavigationScreenProp<{}>,
    screenProps:{
        t: (scope: string, options?: any) => string,
        locale: string 
    }
}