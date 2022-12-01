import {View,Text,Image} from 'react-native';
export default function EventComponent(item){
    
    return(
        <View style={{flexDirection:'column'}}>
            <Image source={{uri:item.route.params.image}} style={{height:300,resizeMode:'contain',backgroundColor:'black'}}/>
            <Text style={{fontSize:25,marginLeft:20}}>{item.route.params.name}</Text>
            <View style={{borderRadius:25,backgroundColor:'black',height:'auto',margin:15}}>
                <Text style={{color:'white',textAlign:'left',margin:10,fontSize:18}}>{item.route.params.description}</Text>
                <Text style={{color:'white',textAlign:'left',margin:10,fontSize:18}}>Room : {item.route.params.room}</Text>
            </View>
        </View>
    );
}