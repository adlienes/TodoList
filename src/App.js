/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput} from 'react-native';
import MyButton from './components/button';

const items=[];

export default class App extends Component<> {
  constructor(props){
    super(props);
    this.addItem=this.addItem.bind(this);

  }

  state={
    toDo:'',
  }


  addItem(){
   // console.warn('App:addItem',this.state.toDo)
    items.push(this.state.toDo)
    this.setState({toDo:''})
  }

renderItem(item){

  return(

    <View key={item} style={{backgroundColor:'gray',height:100,margin:10,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontSize:25}}>{item}</Text>
    </View>
  );
}



  render() {
    return (
      <View style={{flex:1,marginTop:Platform.OS=='ios' ? 21 : 0}}>
        <View style={{backgroundColor:'yellow',height:100,flexDirection:'row',padding:8}}>

        <View style={{backgroundColor:'red',flex:4,marginRight:5,justifyContent:'center'}}>
            <TextInput value={this.state.toDo} onChangeText={(v)=> this.setState({toDo:v})} placeholder={'Listeye Eklemek İstediklerinizi Giriniz'} style={{height:30,backgroundColor:'white',borderRadius:10}}></TextInput>
        </View>
        <View style={{backgroundColor:'pink',flex:1}}>
          <MyButton onPress={this.addItem} Text={'EKLE'}></MyButton>
        </View>

        </View>
        <ScrollView>
          {items.map((item)=>this.renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}