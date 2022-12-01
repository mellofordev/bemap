import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Event from './components/Event';
import EventComponent from './components/EventComponent';
import Game from './components/Game';
import About from './components/About';
import {ref} from './components/Navigator';
import { useState } from 'react';
const Stack = createStackNavigator();

const Home =()=>{
  const [day,setDay]=useState(1);
  return(
    <View style={styles.container}>
    
    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <View style={{borderRadius:25,backgroundColor:'black',flexDirection:'row',justifyContent:'space-between',height:50,width:'auto'}}>
    {[1,2,3].map((i)=>{
        return(
          <TouchableOpacity style={{margin:5,borderRadius:25,backgroundColor:day==i?'gray':'white',width:100}} onPress={()=>{setDay(i)}}>
            <Text  style={{color:'black',textAlign:'center',margin:10}}>Day {i} </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
    <Event eventday={day}/>
   <StatusBar style="auto" />
 </View>
  );
}
export default function App() {
  

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator>
        <Stack.Screen name="BEMAP" component={Home}/>
        <Stack.Screen name="EventComponent" component={EventComponent}
        options={{
          headerTitle:'Event',
        }}
        />
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  eventTitle:{
    flexDirection:'row',
    marginLeft:15,
  },

});
