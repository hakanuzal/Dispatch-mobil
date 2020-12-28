import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './AppContainer';
import i18n from "./Views/common/loc"

interface IProps { }
interface IState { }

export default class App extends React.Component<IProps,IState>{
    constructor (p: IProps, s: IState){
        super(p,s)
    }

    render() {
        debugger;
        return (
            <AppContainer></AppContainer>);
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent:'center'
  },
});