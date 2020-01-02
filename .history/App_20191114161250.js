/* eslint-disable prettier/prettier */
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
     weather: '',
     created:'2000-01-01T00:00:00.000000Z'
   }
 }

 //Life cycle
 componentDidMount(){
   this.handleUpdateLocation('Kiev');
 }

 handleDate = date => moment(date).format("hh:mm:ss");

 handleUpdateLocation = async city =>{
   if(!city) return;

  this.setState({loading: true},async ()=>{
 
  try{

   const ID= await getLocationId(city);
   const {location , temperature,weather,created} = await getWeather(ID);

   this.setState({
     loading:false,
     error:false,
     location,
     weather,
     temperature,
     created
   })
  } catch(e){
    this.setState({
      loading: false,
      error: true
    });
  }
 })
}
  render(){
    const { loading , error, location,weather,temperature,created} = this.state;
    return(
      <KeyboardAvoidingView style={}>
        
      </KeyboardAvoidingView>
    )
  }
}