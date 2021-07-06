import React, { Component } from 'react';
import cadastro from "./cadastro";
import grafico from "./grafico";
import {SafeAreaView,StyleSheet,Text,TextInput,View,FlatList,Button} from 'react-native';
import { firebaseApp, contasDB } from './Firebase.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class conta extends Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName= "Cadastro">
          <Stack.Screen name="cadastro" component={cadastro} options={({navigation})=>({
            headerRight: () =>(
              <Button onPress={()=> navigation.navigate("grafico")} title="grafico" color="#000"/>
            )
          })}/>
          <Stack.Screen name="grafico" component={grafico} options={({navigation})=>({
            headerRight: () =>(
              <Button onPress={()=> navigation.navigate("cadastro")} title="cadastro" color="#000"/>
            )
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}