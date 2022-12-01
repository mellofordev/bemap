import {View,Text,Image,StyleSheet} from 'react-native';
export default function About(){
    return(
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:'https://i.ibb.co/MfWw7pQ/bemap-redisgned.png'}} style={{height:300,width:'100%'}}/>
            <View style={{borderRadius:25,backgroundColor:'black',margin:20,height:'auto',width:'90%'}}>
                <Text style={styles.aboutText}>v1.0.0</Text>
                <Text style={styles.aboutText}>App developed by sreedhar</Text>
                <Text style={styles.aboutText}>Backend by mohammed</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    aboutText:{
        fontsize:25,
        fontWeight:'400',
        color:'white',
        textAlign:'center',
    }
});