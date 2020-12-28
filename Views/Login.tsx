import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import IComman from './common/interfaces/ICommon';

interface IProps extends IComman { }
interface IState { }

export default class Login extends React.Component<IProps,IState>{
    constructor (p: IProps, s: IState){
        super(p,s)
    }

    render() {
        debugger;
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button title ="Home Sayfasına Git "onPress ={()=>{
                    this.props.navigation.navigate("Home")
            }} ></Button>
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