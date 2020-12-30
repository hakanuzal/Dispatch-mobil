import React from 'react';
import {StyleSheet, Text,View, Dimensions, ScrollView} from 'react-native';
import Card from '../common/Card';
import IComman from '../common/interfaces/ICommon';

interface IProps extends IComman{}
interface IState {}
const width = Dimensions.get("window").width;

export default class Home extends React.Component<IProps,IState>{

    carsds = [{color:"red", count:1, title:"kırmızı"},
    {color:"blue", count:2, title:"mavi"},
    {color:"gray", count:3, title:"gri"},
    {color:"green", count:4, title:"yeşil"},
    {color:"black", count:5, title:"siyah"},
    {color:"white", count:7, title:"beyaz"},
    {color:"pink", count:7, title:"pembe"},
    {color:"yellow", count:8, title:"sarı"},
    {color:"brown", count:9, title:"kahve"},
    ]

    constructor (p: IProps, s: IState){
        super(p,s)
    }

    render() {
        debugger;
        return (
            <ScrollView style={{flex:1}}>
            <View style={styles.container}>
               {
                   this.carsds.map((item,index) => {
                       return <Card key={`card_${index}`} color={item.color} count={item.count} title={item.title}></Card>
                   })
               }     
             </View>
             </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap"
  },
});