
import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

interface IProps { }
interface IState { }

export default class Home extends React.Component<IProps,IState>{
    constructor (p: IProps, s: IState){
        super(p,s)
    }

    render() {
        debugger;
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
});