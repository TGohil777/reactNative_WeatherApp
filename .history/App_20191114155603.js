import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StatusBar
} from 'react-native';

//Utils


//Search Component

//Moment lib
import moment from 'moment';

export default class App extends React.Component{
 constructor(props){
   super(props);

   this.handleDate = this.handleDate.bind(this);

   this.state={
     loading: false,
     error: false,
     location:'',
     temperature: 0,
     
   }
 }
  render(){
    return(

    )
  }
}