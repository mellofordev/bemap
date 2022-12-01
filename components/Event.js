import { useState,useEffect,useCallback } from 'react';
import {View,Text,TouchableOpacity,Image,FlatList,StyleSheet,ActivityIndicator,RefreshControl} from 'react-native';
import * as Navigator from './Navigator';
export default function Event({eventday}){
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const apifetch=()=>{
      fetch(`https://mohdfa.pythonanywhere.com/days/${eventday}`,{
        method:'GET',
        headers:{
          'Content-Types':'application/json'
        }
      })
      .then(response=>response.json())
      .then(data=>{
        setData(data.events);
        setLoading(false);
        
      })
      .catch(e=>{
        console.log(e);
      })
    }
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
   }
    const onRefresh = useCallback(()=>{
        setLoading(true);
        wait(2000).then(()=>{
            setLoading(false);
            
        })
        apifetch();
    },[])
    useEffect(()=>{
      setLoading(true);
      apifetch();
    },[eventday])
    return(
        <>
        {loading==true ? <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}><ActivityIndicator size={30} color={'black'}/></View>:(
                  <FlatList
                  style={{marginLeft:0}}
                  data={data}
                  numColumns={2}
                  renderItem={({item})=>{
                   return(
                     <TouchableOpacity onPress={()=>{Navigator.push('EventComponent',{name:item.name,image:item.image,description:item.description,room:item.room})}}>
                       <View style={{borderRadius:25,backgroundColor:'black',margin:10}}>
                       <Image source={{uri:item.image}} style={{height:200,width:150,margin:10,borderRadius:25,resizeMode:'contain',borderWidth:0.5,borderColor:'white'}}/>
                       <Text style={{color:'white',textAlign:'center',marginBottom:2,fontSize:24}}>{item.name.length>10 ? item.name.slice(0,8)+'...':item.name }</Text>
                       </View>
                       
                     </TouchableOpacity>
                   );
                  }}
                  keyExtractor={(item,index)=>{item.id.toString();}}
                  ListFooterComponent={()=>{
                   return(
                     <>
                     
                     <View style={{flexDirection:'row',justifyContent:'space-evenly',height:100,elevation:2}}>
                         <TouchableOpacity style={styles.button} onPress={()=>{Navigator.push('About')}}>
                           <Text style={{color:'white',fontSize:18,textAlign:'center',marginTop:10}}>About</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.button} onPress={()=>{Navigator.push('Game')}}>
                            <Text style={{color:'white',fontSize:18,textAlign:'center',marginTop:10}}>Game</Text>
                         </TouchableOpacity>
                     </View>
                     </>
                   );
                  }}
                  refreshControl={
                    <RefreshControl
                    enabled={true}
                    refreshing={loading}
                    onRefresh={onRefresh}
                    />
                  }
                  />
        )}

        </>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        borderRadius:25,
        height:50,
        width:80
      }
});