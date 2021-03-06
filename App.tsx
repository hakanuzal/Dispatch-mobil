import { locale } from 'i18n-js';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './AppContainer';
import {i18n} from "./common/Loc"
import * as Localization from 'expo-localization'

interface IProps { }
interface IState { 
  locale: string
}
  

export default class App extends React.Component<IProps,IState>{
    constructor (p: IProps, s: IState){
        super(p,s);
        this.state = {
          locale: "tr" //Localization.locale
        }
    }

    t = (scope: string, options: any) => {
      return  i18n.t(scope, {locale : this.state.locale, ...options});
    }
    
    setLocale = (locale: string) => {
      this.setState({
        locale
      });
    }
    render() {
        debugger;
        return (
            <AppContainer
              screenProps={{
                locale:this.state.locale,
                t: this.t
                }}

            ></AppContainer>
        );
    }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent:'center'
  },
});*/